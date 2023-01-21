import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useMovieSearch } from '@api/Movies';

import {
  moviesSelector,
  moviesLoadingSelector,
  moviesErrorSelector,
  moviesTotalSelector,
  useDispatchFetchMovieFromApi,
} from '@store';
import { LoadingOverlay, Error } from '@shared';

import { ContentWrapper } from './ContentWrapper';

import { ControlsWrapper } from './Controls';
import { MoviesWrapper } from './Movies';
import { SORT_OPTIONS } from './Content.constants';

export const Content = () => {
  const dispatch = useDispatch();
  const { searchQuery, genre, sortBy, urlSearchParams } = useMovieSearch();
  const dispatchFetchMovies = useDispatchFetchMovieFromApi();
  const history = useHistory();

  const movies = useSelector(moviesSelector);
  const moviesLoading = useSelector(moviesLoadingSelector);
  const moviesError = useSelector(moviesErrorSelector);
  const moviesTotal = useSelector(moviesTotalSelector);
  useEffect(() => {
    dispatchFetchMovies();
  }, [dispatch, sortBy, searchQuery, genre]);

  return (
    <ContentWrapper>
      <ControlsWrapper
        sortBy={sortBy!}
        options={SORT_OPTIONS}
        optionSelected={(sortBy) => {
          urlSearchParams.set('sortBy', sortBy);
          history.replace({
            search: urlSearchParams.toString(),
          });
        }}
      />
      <span data-e2e="movies-total">
        <b>{moviesTotal}</b> movies found
      </span>
      {moviesError && <Error>{moviesError}</Error>}
      <MoviesWrapper movies={movies} />
      {moviesLoading && <LoadingOverlay />}
    </ContentWrapper>
  );
};
