import { Movie, SortOptions, MovieGenre } from '@api/Movies';

export const enum MoviesStatus {
  Loading,
  Idle,
  LoadingFailed,
  LoadingSucceed,
}

export interface MoviesState {
  movies: Movie[];
  limit: number;
  offset: number;
  totalAmount: number;
  sortBy: SortOptions;
  search: string;
  filterByGenre: MovieGenre | null;

  status: MoviesStatus;
  error: string | null;
}

export interface Payload<PType> {
  payload: PType;
}
