import { fetchMovies } from '@api/Movies';
import styled from 'styled-components';

import { Movie } from './Movie';

const Wrapper = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, 320px);
`;

const movies = fetchMovies();

export const MoviesWrapper = () => {
  return (
    <Wrapper>
      {movies.map((movie) => (
        <Movie
          key={movie.title}
          title={movie.title}
          genre={movie.genre}
          releaseDate={movie.releaseDate}
          coverUrl={movie.coverUrl}
        />
      ))}
    </Wrapper>
  );
};
