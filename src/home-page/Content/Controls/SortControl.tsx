import { FC } from 'react';
import { Select } from '@shared';

import { SortOptions } from '../Content.constants';
import { SortControlProps } from './Controls.models';

export const SortControl: FC<SortControlProps> = ({
  options,
  sortBy,
  optionSelected,
}) => {
  return (
    <>
      <span className='sort-label'>SORT BY</span>
      <Select<SortOptions>
        options={options}
        value={sortBy}
        onSelect={optionSelected}
        placeholder='NOTHING SELECTED'
      />
    </>
  );
};
