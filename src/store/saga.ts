import { call, put, takeLatest } from 'redux-saga/effects';
import { isAxiosError } from '@types';

import {
  fetchMoviesAPI,
  fetchMovieType,
  SearchMovieUrlParams,
  FetchMovieParams,
  mapSearchMovieParams,
} from '@api/Movies';
import {
  fetchMoviesFromAPI,
  fetchMoviesFailure,
  fetchMoviesSucceed,
} from './movie.slice';
import { Payload } from './movie.store.models';

function* fetchMovies(params: Payload<SearchMovieUrlParams>) {
  const { payload } = params;

  try {
    const fetchParams: FetchMovieParams = mapSearchMovieParams(payload);

    const moviesResponse: Awaited<fetchMovieType> = yield call(
      fetchMoviesAPI,
      fetchParams
    );

    yield put(fetchMoviesSucceed(moviesResponse));
  } catch (e) {
    let errMessage = isAxiosError(e) ? e.message : 'Something went wrong';

    yield put(fetchMoviesFailure(errMessage));
  }
}

export function* rootSaga() {
  yield takeLatest(fetchMoviesFromAPI.type, fetchMovies);
}
