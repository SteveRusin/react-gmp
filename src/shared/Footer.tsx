import styled from 'styled-components';
import { transparentize } from 'polished';

import { Logo } from './Logo';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  height: 70px;
  background-color: ${({ theme }) =>
    transparentize(0.3, theme.palette.secondary)};
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Logo />
    </FooterWrapper>
  );
};
