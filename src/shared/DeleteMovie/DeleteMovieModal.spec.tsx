import { Modal } from '@shared';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';
import { DeleteMovieProps } from './DeleteMovie.models';
import { DeleteMovie } from './DeleteMovie';
import { render } from '@testing-library/react';

function renderComponent(props: DeleteMovieProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Modal>
        <DeleteMovie {...props} />
      </Modal>
    </ThemeProvider>
  );
}

describe('Delete movie componentComponent', () => {
  let portalRoot: HTMLDivElement;

  beforeEach(() => {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal-root');
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    document.body.removeChild(portalRoot);
  });

  it('should renders correctly', () => {
    render(
      renderComponent({
        onClose: jest.fn(),
        onConfirm: jest.fn(),
      })
    );

    expect(portalRoot).toMatchSnapshot();
  });
});
