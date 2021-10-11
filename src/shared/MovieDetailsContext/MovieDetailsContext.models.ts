import { Movie } from '@api/Movies';

export interface MovieDetails {
  movie: Movie | null;
  showMovieDetails: (movie: Movie | null) => void;
}
