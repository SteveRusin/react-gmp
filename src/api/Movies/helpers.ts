import { useParams, useLocation } from 'react-router-dom';

import {
  Movie,
  MovieApi,
  SearchMovieUrlParams,
  MovieGenre,
  SearchMovieWithUrlParams,
  SortOptions,
  FetchMovieParams,
  SearchByOption,
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
  const params = useParams() as SearchMovieUrlParams;
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const genre = urlParams.get('genre') as MovieGenre;
  const sortBy =
    (urlParams.get('sortBy') as SortOptions) || SortOptions.ByTitle;
  const movieId = parseInt(urlParams.get('movie')!, 10) || void 0;

  return {
    genre,
    sortBy,
    movieId,
    searchQuery: params.searchQuery || '',
    urlSearchParams: urlParams,
  };
}

export function mapSearchMovieParams(
  payload?: SearchMovieUrlParams
): FetchMovieParams {
  return {
    sortBy: payload?.sortBy! || SortOptions.ByTitle,
    search: payload?.searchQuery ? payload.searchQuery : void 0,
    sortOrder: 'asc',
    searchBy: SearchByOption.ByTitle,
    limit: 9,
    filter: payload?.genre ? [payload.genre] : void 0,
  };
}
