import { Movie as MovieModel, MovieGenre } from '@api/Movies';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Movie } from './Movie';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';
import { MovieProps } from './Movies.models';

function renderComponent(props: MovieProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Movie {...props} />
    </ThemeProvider>
  );
}

describe('Movie Component', () => {
  let onMenuItemClick: jest.Mock<void, unknown[]>;
  let onMovieClick: jest.Mock<void, unknown[]>;
  let movieMock: MovieModel;

  beforeEach(() => {
    onMenuItemClick = jest.fn();
    onMovieClick = jest.fn();
    movieMock = {
      id: 1,
      coverUrl: 'url',
      description: 'description',
      genre: [MovieGenre.ActionAdventure],
      rating: 5,
      releaseDate: '2021',
      runtime: 120,
      title: 'Movie Title',
    };
  });

  it('should render correctly', () => {
    const { asFragment } = render(
      renderComponent({
        onMenuItemClick,
        onMovieClick,
        movie: movieMock,
      })
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should emit clicked move to parent', () => {
    render(
      renderComponent({
        onMenuItemClick,
        onMovieClick,
        movie: movieMock,
      })
    );

    const movieWrapper = screen.getByTestId('movie-wrapper');

    userEvent.click(movieWrapper);

    expect(onMovieClick).toHaveBeenCalledWith(movieMock);
  });
});
