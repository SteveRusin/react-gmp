import { FC } from 'react';
import PropTypes from 'prop-types';

import { Movie as MovieModel } from '@api/Movies';

import { MovieWrapper } from './MovieWrapper';

export const Movie: FC<MovieModel> = ({
  coverUrl,
  genre,
  releaseDate,
  title,
}) => {
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

// to be removed
// no need to use proTypes due to typescript

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
};
