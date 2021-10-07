import styled from 'styled-components';
import { transparentize } from 'polished';

import { FlexColumnContainer } from '@shared';

export const HeaderWrapper = styled(FlexColumnContainer)`
  position: relative;
  background-color: ${({ theme }) =>
    transparentize('0.5', theme.palette.accent)};
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  margin-bottom: 5px;

  &::after {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${({ theme }) => theme.urls.headerBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: -70px;
    z-index: -1;
    filter: blur(4px);
  }
`;
