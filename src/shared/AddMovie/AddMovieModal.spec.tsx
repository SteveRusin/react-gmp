import { Modal } from '@shared';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';
import { AddMovieModalProps } from './AddMovie.models';
import { AddMovieModal } from './AddMovieModal';
import { render, screen } from '@testing-library/react';

function renderComponent(props: AddMovieModalProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Modal>
        <AddMovieModal {...props} />
      </Modal>
    </ThemeProvider>
  );
}

describe('AddMovie Modal Component', () => {
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
        onSubmit: jest.fn(),
      })
    );

    expect(portalRoot).toMatchSnapshot();
  });
});
