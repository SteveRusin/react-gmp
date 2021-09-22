import { FC } from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { FlexColumnContainer } from '@shared';

const Wrapper = styled(FlexColumnContainer)`
  position: relative;
  max-height: 396px;
  background-color: ${({theme}) => transparentize('0.5', theme.palette.accent)};
  overflow: hidden;

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

export const HeaderWrapper: FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
