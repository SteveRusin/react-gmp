import { Movie } from '@api/Movies';

import { SelectOption } from '@shared';

import { SortOptions } from './Content.constants';

export type SortFn = (a: Movie, b: Movie) => number;

export interface ContentState {
  sortOptions: SelectOption<SortOptions>[];
  sortBy: SortOptions | null;
  movies: Movie[];
  sortedMovies: Movie[] | null;
}
