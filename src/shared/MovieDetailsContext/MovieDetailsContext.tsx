import { createContext } from 'react';

import { MovieDetails } from './MovieDetailsContext.models';

export const MovieDetailsContext = createContext<MovieDetails>({
  movie: null,
  showMovieDetails: () => null,
});
