import { useState } from 'react';
import {
  useParams,
  useHistory,
  generatePath,
  useRouteMatch,
} from 'react-router-dom';

import { useMovieSearch, SearchMovieUrlParams } from '@api/Movies';

import { Search } from './Search';
import { Wrapper } from './Search.styles';

export const SearchWrapper = () => {
  const { searchQuery } = useMovieSearch();
  const [searchValue, setSearchValue] = useState(searchQuery);
  const history = useHistory();
  const match = useRouteMatch();
  const searchParams: SearchMovieUrlParams = {
    searchQuery: searchValue,
  };

  return (
    <Wrapper>
      <h1 className='header-search-title'>FIND YOUR MOVIE</h1>
      <div className='input-wrapper'>
        <Search
          searchValue={searchValue}
          onSearchValueChange={setSearchValue}
          onSearch={() => {
            if(searchValue) {
              history.replace(
                generatePath(match.path, { ...match.params, ...searchParams })
              )
            } else {
              history.push('.')
            }
          }}
        />
      </div>
    </Wrapper>
  );
};
