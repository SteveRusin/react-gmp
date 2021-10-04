import { SelectOption } from '@shared';

export const enum SortOptions {
  ByReleaseDate,
  ByTitle,
}

export const SORT_OPTIONS: SelectOption<SortOptions>[] = [
  {
    id: SortOptions.ByReleaseDate,
    name: 'Release date',
  },
  {
    id: SortOptions.ByTitle,
    name: 'Title',
  },
];
