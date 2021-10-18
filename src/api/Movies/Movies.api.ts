import axios from 'axios';

import { API_URL } from './api.constants';
import {
  Movie,
  MovieApi,
  MovieApiResponse,
  FetchMovieParams,
} from './Movie.models';

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
    data: data.data.map(
      (movie): Movie => ({
        id: movie.id,
        title: movie.title,
        genre: movie.genres,
        coverUrl: movie.poster_path,
        description: movie.tagline,
        rating: movie.vote_average,
        releaseDate: movie.release_date,
        runtime: movie.runtime,
      })
    ),
  };
};

export type fetchMovieType = ReturnType<typeof fetchMoviesAPI>;
