import styled from 'styled-components';

import { TextArea } from '@shared/FormControls';
import { FlexColumnContainer } from '@shared/FlexColumnContainer';

export const AddMovieModalWrapper = styled(FlexColumnContainer)`
  max-height: 800px;
  width: 950px;
  padding: 30px 30px 60px;

  background-color: ${({ theme }) => theme.palette.accent};
`;

export const ContentWrapper = styled(FlexColumnContainer)``;

export const AddMovieActionsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1em;
  font-size: 2rem;
`;

export const AddMovieForm = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  .form-left {
    width: 80%;
  }

  .form-right,
  .form-left {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const MovieDescription = styled(TextArea)`
  flex: 1;
  margin-bottom: 20px;
  resize: none;
`;
