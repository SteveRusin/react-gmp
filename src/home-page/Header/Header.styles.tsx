import styled from 'styled-components';
import { transparentize } from 'polished';

import { FlexColumnContainer } from '@shared';

import { HeaderWrapperProps } from './Header.models';

export const HeaderWrapper = styled(FlexColumnContainer)<HeaderWrapperProps>`
  position: relative;
  background-color: ${({ theme, isDetailsOpen }) => {
    return isDetailsOpen
      ? 'rgba(0, 0, 0, 0.9)'
      : transparentize('0.5', theme.palette.accent);
  }};
  transition: background-color 100ms linear, height 100ms linear;

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
