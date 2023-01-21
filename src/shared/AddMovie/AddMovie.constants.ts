import { MovieGenre } from '@api/Movies';

import { SelectOption } from '@shared';

export const GENRE_OPTIONS: SelectOption<MovieGenre>[] = Object.values(
  MovieGenre
).map((genre) => ({
  id: genre,
  name: genre,
}));
