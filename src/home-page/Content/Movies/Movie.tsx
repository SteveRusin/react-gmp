import { FC } from 'react';

import { Movie as MovieModel } from '@api/Movies';

import { MovieWrapper } from './MovieWrapper';

export const Movie: FC<{ movie: MovieModel }> = ({ movie }) => {
  const { coverUrl, genre, releaseDate, title } = movie;

  return (
    <MovieWrapper tabIndex={0}>
      <img className='movie-cover' src={coverUrl} alt='movie cover' />
      <div className='movie-description-container'>
        <div className='movie-description-heading'>
          <span className='movie-title'>{title}</span>
          <span className='movie-genre'>{genre}</span>
        </div>
        <span className='movie-release-date'>{releaseDate}</span>
      </div>
    </MovieWrapper>
  );
};
