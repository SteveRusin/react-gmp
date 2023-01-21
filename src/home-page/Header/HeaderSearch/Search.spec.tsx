import { Search } from './Search';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';
import { SearchProps } from './Search.models';

function renderComponent(props: SearchProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Search {...props} />
    </ThemeProvider>
  );
}

describe('Search Component', () => {
  let onSearch: jest.Mock<unknown, unknown[]>;
  let onSearchValueChange: jest.Mock<void, string[]>;

  beforeEach(() => {
    onSearch = jest.fn();
    onSearchValueChange = jest.fn();
  });

  it('should accept input values to render text passed from parent component', () => {
    const searchValue = 'random text for search';

    render(
      renderComponent({
        onSearch,
        onSearchValueChange,
        searchValue,
      })
    );

    expect(screen.getByDisplayValue(searchValue)).toBeDefined();
  });

  it('should emit onSearch on enter', () => {
    const searchValue = 'searchValue';

    render(
      renderComponent({
        onSearch,
        onSearchValueChange,
        searchValue,
      })
    );

    const input: HTMLInputElement = screen.getByDisplayValue('searchValue');

    userEvent.type(input, 'abc{enter}');

    expect(onSearch).toHaveBeenCalled();
  });

  it('should emit onSearchValueChange on input and control input value', () => {
    let searchValue = '';
    const onSearchValueChange = jest.fn((val) => {
      searchValue = val;

      rerender(
        renderComponent({
          onSearch,
          onSearchValueChange,
          searchValue,
        })
      );
    });

    const { rerender } = render(
      renderComponent({
        onSearch,
        onSearchValueChange,
        searchValue,
      })
    );

    const input: HTMLInputElement = screen.getByPlaceholderText(
      'What do you want to watch'
    );

    userEvent.type(input, 'abc{enter}');

    expect(onSearchValueChange).toHaveBeenCalledTimes(3);
    expect(onSearchValueChange).toHaveBeenLastCalledWith('abc');
    expect(input.value).toBe('abc');
  });
});
