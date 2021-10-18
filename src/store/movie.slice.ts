import { createSlice, createSelector } from '@reduxjs/toolkit';

import { Movie, SortOptions, MovieGenre } from '@api/Movies';

import { MoviesState, MoviesStatus, Payload } from './movie.store.models';
import type { RootState } from './store';
import { MovieApiResponse } from '@api/Movies/Movie.models';

const initialState: MoviesState = {
  movies: [],
  limit: 0,
  offset: 0,
  totalAmount: 0,
  sortBy: SortOptions.ByTitle,
  search: '',
  filterByGenre: null,

  status: MoviesStatus.Idle,
  error: null,
};

export const movieSlice = createSlice({
  name: 'MoviesSlice',
  initialState: initialState,
  reducers: {
    fetchMoviesFromAPI(state) {
      return {
        ...state,
        status: MoviesStatus.Loading,
      };
    },
    fetchMoviesSucceed(state, { payload }: Payload<MovieApiResponse<Movie[]>>) {
      return {
        ...state,
        error: null,
        movies: payload.data,
        limit: payload.limit,
        offset: payload.offset,
        totalAmount: payload.totalAmount,
        status: MoviesStatus.LoadingSucceed,
      };
    },
    fetchMoviesFailure(state, { payload }: Payload<string>) {
      return {
        ...state,
        ...initialState,
        error: payload,
        status: MoviesStatus.LoadingFailed,
      };
    },
    sortMoviesBy(state, { payload }: Payload<SortOptions>) {
      return {
        ...state,
        sortBy: payload,
      };
    },
    searchMovies(state, { payload }: Payload<string>) {
      return {
        ...state,
        search: payload,
      };
    },
    filterByGenre(state, { payload }: Payload<MovieGenre | null>) {
      return {
        ...state,
        filterByGenre: payload,
      };
    },
  },
});

export const {
  fetchMoviesFromAPI,
  fetchMoviesFailure,
  fetchMoviesSucceed,
  sortMoviesBy,
  searchMovies,
  filterByGenre,
} = movieSlice.actions;

export const movieReducer = movieSlice.reducer;

export const movieStateSelector = (state: RootState) => state.movie;

export const moviesSelector = createSelector(
  movieStateSelector,
  (state) => state.movies
);

export const moviesErrorSelector = createSelector(
  movieStateSelector,
  (state) => state.error
);

export const moviesStatusSelector = createSelector(
  movieStateSelector,
  (state) => state.status
);

export const moviesTotalSelector = createSelector(
  movieStateSelector,
  (state) => state.totalAmount
);

export const moviesSortBySelector = createSelector(
  movieStateSelector,
  (state) => state.sortBy
);

export const moviesSearchSelector = createSelector(
  movieStateSelector,
  (state) => state.search
);

export const moviesFilterByGenreSelector = createSelector(
  movieStateSelector,
  (state) => state.filterByGenre
);

export const moviesLoadingSelector = createSelector(
  movieStateSelector,
  ({ status }) =>
    status === MoviesStatus.Loading || status === MoviesStatus.Idle
);