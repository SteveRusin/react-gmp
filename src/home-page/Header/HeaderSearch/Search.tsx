import { FC } from 'react';

import { Input, ButtonPrimary } from '@shared';

import { SearchProps } from './Search.models';

export const Search: FC<SearchProps> = ({
  searchValue,
  onSearchValueChange,
  onSearch,
}) => {
  return (
    <>
      <Input
        className='search-input'
        type='text'
        value={searchValue}
        onChange={(e) => onSearchValueChange(e.target.value)}
        placeholder='What do you want to watch'
      />
      <ButtonPrimary onClick={onSearch} className='search-button'>
        SEARCH
      </ButtonPrimary>
    </>
  );
};
