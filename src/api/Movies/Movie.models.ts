export enum MovieGenre {
  ActionAdventure = 'Adventure',
  Drama = 'Drama',
  Music = 'Music',
  Comedy = 'Comedy',
}

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  genre: MovieGenre[];
  coverUrl: string;
  rating: number;
  runtime: number;
  description: string;
}

export interface MovieApi {
  id: number;
  budget: number;
  genres: MovieGenre[];
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieApiResponse<T> {
  data: T;
  limit: number;
  offset: number;
  totalAmount: number;
}

export const enum SortOptions {
  ByReleaseDate = 'release_date',
  ByTitle = 'title',
  Rating = 'vote_average',
}

export const enum SearchByOption {
  ByTitle = 'title',
  ByGenre = 'genres',
}

export interface FetchMovieParams {
  sortBy: SortOptions;
  sortOrder: 'asc' | 'desc';
  limit: number;
  search?: string;
  searchBy: string;
  filter?: MovieGenre[] | null;
}

export interface SearchMovieUrlParams {
  searchQuery?: string;
  genre?: MovieGenre;
  sortBy?: SortOptions;
  movieId?: number;
}

export interface SearchMovieWithUrlParams extends SearchMovieUrlParams {
  urlSearchParams: URLSearchParams;
}
