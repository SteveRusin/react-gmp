import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  moviesSelector,
  fetchMoviesFromAPI,
  moviesLoadingSelector,
  moviesErrorSelector,
  moviesTotalSelector,
  moviesSortBySelector,
  sortMoviesBy,
  moviesSearchSelector,
  moviesFilterByGenreSelector,
} from '@store';
import { LoadingOverlay, Error } from '@shared';

import { ContentWrapper } from './ContentWrapper';

import { ControlsWrapper } from './Controls';
import { MoviesWrapper } from './Movies';
import { SORT_OPTIONS } from './Content.constants';

export const Content = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const moviesLoading = useSelector(moviesLoadingSelector);
  const moviesError = useSelector(moviesErrorSelector);
  const moviesTotal = useSelector(moviesTotalSelector);
  const moviesSortBy = useSelector(moviesSortBySelector);
  const moviesSearch = useSelector(moviesSearchSelector);
  const moviesFilterByGenre = useSelector(moviesFilterByGenreSelector);

  useEffect(() => {
    dispatch(fetchMoviesFromAPI());
  }, [dispatch, moviesSortBy, moviesSearch, moviesFilterByGenre]);

  return (
    <ContentWrapper>
      <ControlsWrapper
        sortBy={moviesSortBy}
        options={SORT_OPTIONS}
        optionSelected={(sortBy) => dispatch(sortMoviesBy(sortBy))}
      />
      <span>
        <b>{moviesTotal}</b> movies found
      </span>
      {moviesError && <Error>{moviesError}</Error>}
      <MoviesWrapper movies={movies} />
      {moviesLoading && <LoadingOverlay />}
    </ContentWrapper>
  );
};
