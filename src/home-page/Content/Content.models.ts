import { Movie, SortOptions } from '@api/Movies';

import { SelectOption } from '@shared';

export interface ContentState {
  sortOptions: SelectOption<SortOptions>[];
  sortBy: SortOptions | null;
  movies: Movie[];
  sortedMovies: Movie[] | null;
}
