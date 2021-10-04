import { FC } from 'react';

import styled from 'styled-components';

import { Logo } from '@shared';

import { AddMovie } from './AddMovie';
import { HeaderTopProps } from './HeaderTop.models';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.size.pageVerticalPadding}
    ${(props) => props.theme.size.pageHorizontalPadding} 0;
`;

export const HeaderTopWrapper: FC<HeaderTopProps> = ({ onAddMovie }) => {
  return (
    <Wrapper>
      <Logo />
      <AddMovie onClick={onAddMovie}> + ADD MOVIE </AddMovie>
    </Wrapper>
  );
};
