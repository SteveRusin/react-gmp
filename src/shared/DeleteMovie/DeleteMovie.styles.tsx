import styled from 'styled-components';

import { FlexColumnContainer } from '@shared/FlexColumnContainer';

export const DeleteMovieWrapper = styled(FlexColumnContainer)`
  font-size: 1.5rem;
  max-height: 250px;
  width: 500px;
  padding: 30px 30px 60px;

  background-color: ${({ theme }) => theme.palette.accent};

  .confirm-button {
    font-size: 2rem;
    margin-left: auto;
  }
`;
