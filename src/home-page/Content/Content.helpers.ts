import { Movie } from '@api/Movies';

import { SortOptions } from './Content.constants';
import { SortFn } from './Content.models';

function sortByTitle(a: Movie, b: Movie) {
  return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
}

function sortByReleaseDate(a: Movie, b: Movie) {
  return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
}

export const SORT_MAP: Record<SortOptions, SortFn> = {
  [SortOptions.ByTitle]: sortByTitle,
  [SortOptions.ByReleaseDate]: sortByReleaseDate,
};
