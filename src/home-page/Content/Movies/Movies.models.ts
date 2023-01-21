import { Movie } from '@api/Movies';

import { MenuItemsIds } from './Movies.constants';
export interface MoviesProps {
  movies: Movie[]
}

export interface MovieProps {
  movie: Movie;
  onMovieClick: (movie: Movie) => void;
  onMenuItemClick: (itemId: MenuItemsIds) => void;
}
