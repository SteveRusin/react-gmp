import { FC } from 'react';

import { MovieCover, Menu } from '@shared';

import { MovieProps } from './Movies.models';
import { MovieWrapper, MovieContextMenuTrigger } from './Movies.styles';
import { MENU_ITEMS, MenuItemsIds } from './Movies.constants';

export const Movie: FC<MovieProps> = ({
  movie,
  onMovieClick,
  onMenuItemClick,
}) => {
  const { coverUrl, genre, releaseDate, title } = movie;

  return (
    <MovieWrapper tabIndex={0} onClick={() => onMovieClick(movie)}>
      <MovieCover src={coverUrl} alt='movie cover' />
      <div className='movie-description-container'>
        <div className='movie-description-heading'>
          <span className='movie-title'>{title}</span>
          <span className='movie-genre'>{genre}</span>
        </div>
        <span className='movie-release-date'>{releaseDate}</span>
      </div>
      <Menu<MenuItemsIds>
        className='movie-menu'
        items={MENU_ITEMS}
        onItemClick={(id, e) => {
          e.stopPropagation();
          onMenuItemClick(id);
        }}
        triggerFactory={() => (
          <MovieContextMenuTrigger
            onClick={(e) => e.stopPropagation()}
            className='movie-menu-trigger'
          />
        )}
      ></Menu>
    </MovieWrapper>
  );
};
