import styled from 'styled-components';

import { ButtonBase } from './ButtonBase';

export const ButtonPrimary = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.textPrimary};

  &:disabled {
    pointer-events: none;
    background-color: #cccccc;
    color: #666666;
  }
`;

export const ButtonPrimaryOutline = styled(ButtonBase)`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary};
  border: 1px solid currentColor;
`;
