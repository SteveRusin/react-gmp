import styled from 'styled-components';
import { FlexColumnContainer } from '@shared';

export const Wrapper = styled(FlexColumnContainer)`
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
