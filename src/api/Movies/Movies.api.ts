import axios from 'axios';

import { API_URL } from './api.constants';
import {
  Movie,
  MovieApi,
  MovieApiResponse,
  FetchMovieParams,
} from './Movie.models';

import { movieApiToMovie, movieToMovieApi } from './helpers';

export const fetchMoviesAPI = async (
  params: FetchMovieParams
): Promise<MovieApiResponse<Movie[]>> => {
  const apiResponse = await axios.get<MovieApiResponse<MovieApi[]>>(
    `${API_URL}/movies`,
    {
      params,
      paramsSerializer(param: Record<string, any>) {
        return Object.entries(param)
          .filter(([_, value]) => !!value)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join('&');
      },
    }
  );

  const { data } = apiResponse;

  return {
    ...data,
    data: data.data.map((movie): Movie => movieApiToMovie(movie)),
  };
};

export type fetchMovieType = ReturnType<typeof fetchMoviesAPI>;

export const updateMovie = async (movie: Movie) => {
  const apiResponse = await axios.put<MovieApiResponse<MovieApi[]>>(
    `${API_URL}/movies`,
    movieToMovieApi(movie)
  );

  return apiResponse;
};

export const deleteMovie = (movieId: number) => {
  return axios.delete(`${API_URL}/movies/${movieId}`);
}

export const createMovie = (movie: Movie) => {
  return axios.post(`${API_URL}/movies/`, movieToMovieApi(movie));
}
