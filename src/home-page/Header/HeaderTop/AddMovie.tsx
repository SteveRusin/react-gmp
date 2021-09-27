import { ButtonSecondary } from '@shared';

import styled from 'styled-components';

const AddMovieStyled = styled(ButtonSecondary)`
  font-size: 2rem;
`;

export const AddMovie = () => <AddMovieStyled>+ ADD MOVIE</AddMovieStyled>;
