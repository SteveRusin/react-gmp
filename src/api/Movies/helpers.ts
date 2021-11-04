import { useParams, useLocation } from 'react-router-dom';

import {
  Movie,
  MovieApi,
  SearchMovieUrlParams,
  MovieGenre,
  SearchMovieWithUrlParams,
  SortOptions,
} from './Movie.models';

export function movieApiToMovie(movie: MovieApi): Movie {
  return {
    id: movie.id,
    title: movie.title,
    genre: movie.genres,
    coverUrl: movie.poster_path,
    description: movie.overview,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    runtime: movie.runtime,
  };
}

export function movieToMovieApi(movie: Movie): Partial<MovieApi> {
  return {
    id: movie.id,
    title: movie.title,
    genres: movie.genre,
    poster_path: movie.coverUrl,
    overview: movie.description,
    vote_average: movie.rating,
    release_date: movie.releaseDate,
    runtime: movie.runtime,
  };
}

export function useMovieSearch(): SearchMovieWithUrlParams {
  const params: SearchMovieUrlParams = useParams();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const genre = urlParams.get('genre') as MovieGenre;
  const sortBy = urlParams.get('sortBy') as SortOptions || SortOptions.ByTitle;

  return {
    genre,
    sortBy,
    searchQuery: params.searchQuery || '',
    urlSearchParams: urlParams,
  };
}
