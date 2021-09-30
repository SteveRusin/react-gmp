import { FC } from 'react';

import styled from 'styled-components';

import { Movie } from './Movie';
import { MoviesProps } from './Movies.models';

const Wrapper = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, 320px);
`;

export const MoviesWrapper: FC<MoviesProps> = ({ movies }) => {
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
