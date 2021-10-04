import styled from 'styled-components';
import { transparentize } from 'polished';

export const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => transparentize(0.2, theme.palette.accent)};
  pointer-events: auto;
`;
