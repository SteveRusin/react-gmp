import styled from 'styled-components';
import { transparentize } from 'polished';

import { ButtonBase } from './ButtonBase';

export const ButtonSecondary = styled(ButtonBase)`
  background-color: ${({ theme }) =>
    transparentize(0.32, theme.palette.accentVariant)};
  color: ${({ theme }) => theme.palette.primary};
`;
