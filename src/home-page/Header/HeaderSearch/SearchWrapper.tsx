import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchMovies } from '@store';

import { Search } from './Search';
import { Wrapper } from './Search.styles';

export const SearchWrapper = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h1 className='header-search-title'>FIND YOUR MOVIE</h1>
      <div className='input-wrapper'>
        <Search
          searchValue={searchValue}
          onSearchValueChange={setSearchValue}
          onSearch={() => dispatch(searchMovies(searchValue))}
        />
      </div>
    </Wrapper>
  );
};
