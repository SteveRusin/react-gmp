import { SelectOption } from '@shared';
import { SortOptions } from '@api/Movies';

export const SORT_OPTIONS: SelectOption<SortOptions>[] = [
  {
    id: SortOptions.ByReleaseDate,
    name: 'Release date',
  },
  {
    id: SortOptions.ByTitle,
    name: 'Title',
  },
  {
    id: SortOptions.Rating,
    name: 'Rating',
  },
];
