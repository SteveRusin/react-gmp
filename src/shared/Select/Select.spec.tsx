import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { Select } from './Select';
import { SelectProps } from './Select.models';
import { SelectOption } from '@shared';

function renderComponent<T>(props: SelectProps<T>) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Select<T> {...props} />
    </ThemeProvider>
  );
}

describe('Select Component', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(
      renderComponent({
        onSelect: jest.fn(),
        options: [
          {
            id: 1,
            name: 'Test item',
          },
        ],
      })
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should select multiple items when multi=true', () => {
    const FIRST_OPTION = {
      id: 1,
      name: '1',
    };
    const SECOND_OPTION = {
      id: 2,
      name: '2',
    };
    const options: SelectOption<number>[] = [FIRST_OPTION, SECOND_OPTION];

    let selectedValues: number[] = [];
    const onSelect = jest.fn((values) => {
      selectedValues = values;

      rerender(
        renderComponent<number>({
          multi: true,
          options,
          onSelect,
          value: selectedValues,
        })
      );
    });
    const { rerender } = render(
      renderComponent<number>({
        multi: true,
        options,
        onSelect,
        value: selectedValues,
      })
    );

    userEvent.click(screen.getByTestId('select'));
    userEvent.click(screen.getByText(FIRST_OPTION.name), {
      cancelable: true,
    });

    userEvent.click(screen.getByText(SECOND_OPTION.name), {
      cancelable: true,
    });

    expect(selectedValues).toEqual([FIRST_OPTION.id, SECOND_OPTION.id]);
  });
});
