import { FC } from 'react';

import { Input, ButtonPrimary } from '@shared';

import { SearchProps } from './Search.models';

export const Search: FC<SearchProps> = ({
  searchValue,
  onSearchValueChange,
  onSearch,
}) => {
  return (
    <form
      style={{
        display: 'contents',
      }}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <Input
        className='search-input'
        type='text'
        value={searchValue}
        onChange={(e) => onSearchValueChange(e.target.value)}
        placeholder='What do you want to watch'
      />
      <ButtonPrimary type='submit' className='search-button'>
        SEARCH
      </ButtonPrimary>
    </form>
  );
};
