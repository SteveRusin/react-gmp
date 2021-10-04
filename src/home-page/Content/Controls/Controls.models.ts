import { SelectOption } from '@shared';

import { SortOptions } from '../Content.constants';

export interface SortControlProps {
  options: SelectOption<SortOptions>[];
  sortBy: SortOptions | null;
  optionSelected: (sortBy: SortOptions) => void;
}
