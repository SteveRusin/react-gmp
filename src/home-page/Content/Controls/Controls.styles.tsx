import styled from 'styled-components';

import { ControlsProps } from './Controls.models';

export const DividerWrapper = styled.div<ControlsProps>`
  position: relative;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);

  .active-control-indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${props => props.widthPx}px;
    transform: translateX(${props => props.leftOffsetPx}px);
    transition: transform 400ms, width 400ms;
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;

export const Wrapper = styled.div`
.controls-container {
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.textPrimary};
  font-size: 1.6rem;
}

.category-button {
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  margin-right: 0.9em;
}

.category-controls-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.sort-wrapper {
  display: flex;
  align-items: center;
  gap: 1em;
}

.sort-label {
  opacity: 0.6;
}

.select-trigger {
  background: transparent;
}
`;
