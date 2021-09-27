import styled from 'styled-components';

import { AddMovie } from './AddMovie';
import { Logo } from '@shared';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.size.pageVerticalPadding}
    ${(props) => props.theme.size.pageHorizontalPadding} 0;
`;

export const HeaderTopWrapper = () => {
  return (
    <Wrapper>
      <Logo />
      <AddMovie />
    </Wrapper>
  );
};
