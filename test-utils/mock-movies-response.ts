import { MovieApi, MovieApiResponse, MovieGenre } from '@api/Movies';

export function mockMoviesResponse(): MovieApiResponse<MovieApi[]> {
  return {
    totalAmount: 25,
    limit: 5,
    offset: 0,
    data: [
      {
        id: 1,
        budget: 25,
        genres: [MovieGenre.ActionAdventure],
        overview: 'overview',
        poster_path: 'path',
        release_date: '2021',
        revenue: 25,
        runtime: 121,
        tagline: 'tagline',
        title: 'movie title',
        vote_average: 25,
        vote_count: 100,
      },
    ],
  };
}
