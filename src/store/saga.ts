import { call, put, takeLatest, delay, select } from 'redux-saga/effects';
import { isAxiosError } from '@types';

import { fetchMoviesAPI, fetchMovieType, SearchByOption } from '@api/Movies';
import {
  fetchMoviesFromAPI,
  fetchMoviesFailure,
  fetchMoviesSucceed,
  movieStateSelector,
} from './movie.slice';
import { MoviesState } from './movie.store.models';

function* fetchMovies() {
  try {
    yield delay(Math.random() * 2_000); // slight delay in loading to simulate network
    const { sortBy, search, filterByGenre }: MoviesState = yield select(movieStateSelector)
    const moviesResponse: Awaited<fetchMovieType> = yield call(fetchMoviesAPI, {
      sortBy,
      search: search ? search : void 0,
      sortOrder: 'asc',
      searchBy: SearchByOption.ByTitle,
      limit: 9,
      filter: filterByGenre ? [filterByGenre] : void 0,
    });

    yield put(fetchMoviesSucceed(moviesResponse));
  } catch (e) {
    let errMessage = isAxiosError(e) ? e.message : 'Something went wrong';

    yield put(fetchMoviesFailure(errMessage));
  }
}

export function* rootSaga() {
  yield takeLatest(fetchMoviesFromAPI.type, fetchMovies);
}
