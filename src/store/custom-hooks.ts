import { useDispatch } from 'react-redux';

import { useMovieSearch } from '@api/Movies';

import { fetchMoviesFromAPI } from './movie.slice';

export const useDispatchFetchMovieFromApi = () => {
  const dispatch = useDispatch();
  const { searchQuery, genre, sortBy } = useMovieSearch();

  return () =>
    dispatch(
      fetchMoviesFromAPI({
        searchQuery,
        genre,
        sortBy,
      })
    );
};
