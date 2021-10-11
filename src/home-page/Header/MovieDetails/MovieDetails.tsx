import { FC } from 'react';

import { MovieCover } from '@shared';

import { MovieDetailsWrapper } from './MovieDetails.styles';
import { MovieDetailsProps } from './MovieDetails.models';

export const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <MovieDetailsWrapper>
      <MovieCover src={movie.coverUrl}></MovieCover>
      <div>
        <div className='details-heading'>
          <h2 className='details-title'>{movie.title.toUpperCase()}</h2>
          <div className='details-rating'>{movie.rating}</div>
        </div>
        <div className='details-genre'>{movie.genre}</div>
        <div className='details-time-info'>
          <span>{movie.releaseDate}</span>
          <span>{movie.runtime}mins</span>
        </div>
        <div className='details-movie-description'>{movie.description}</div>
      </div>
    </MovieDetailsWrapper>
  );
};
