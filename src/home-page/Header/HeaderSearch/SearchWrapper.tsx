import { Search } from './Search';

import { FlexColumnContainer } from '@shared';

import styled from 'styled-components';

const Wrapper = styled(FlexColumnContainer)`
  margin: 50px auto;
  max-width: 900px;
  width: 100%;
  padding: 0 10px;

  .header-search-title {
    color: ${({ theme }) => theme.palette.textPrimary};
    font-weight: normal;
    font-size: 4rem;
  }

  .input-wrapper {
    display: flex;
    gap: 1em;
    font-size: 2rem;
  }

  .search-input {
    flex: 1;
  }

  .search-button {
    flex: 0.2;
  }
`;

export const SearchWrapper = () => {
  return (
    <Wrapper>
      <h1 className='header-search-title'>FIND YOUR MOVIE</h1>
      <div className='input-wrapper'>
        <Search />
      </div>
    </Wrapper>
  );
};
