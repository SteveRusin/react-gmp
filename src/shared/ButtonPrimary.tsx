import styled from 'styled-components';

import { ButtonBase } from './ButtonBase';

export const ButtonPrimary = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.textPrimary};
`;
