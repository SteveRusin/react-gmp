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
        data-e2e='search-input'
        type='text'
        value={searchValue}
        onChange={(e) => onSearchValueChange(e.target.value)}
        placeholder='What do you want to watch'
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <ButtonPrimary onClick={onSearch} className='search-button'>
        SEARCH
      </ButtonPrimary>
    </>
  );
};
