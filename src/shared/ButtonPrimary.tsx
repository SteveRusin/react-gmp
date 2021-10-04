import styled from 'styled-components';

import { ButtonBase } from './ButtonBase';

export const ButtonPrimary = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.textPrimary};
`;

export const ButtonPrimaryOutline = styled(ButtonBase)`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary};
  border: 1px solid currentColor;
`;
