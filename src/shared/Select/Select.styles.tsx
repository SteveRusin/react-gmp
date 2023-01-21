import { darken } from 'polished';

import { TriangleDown } from '@styled-icons/octicons';
import styled from 'styled-components';

export const SelectTriangle = styled(TriangleDown)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.color};
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;

  cursor: pointer;
  position: relative;

  .select-placeholder {
    opacity: 0.5;
  }

  .placeholder-wrapper {
    position: relative;
    display: flex;
    width: 100%;
  }

  .select-trigger {
    width: 100%;
  }
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  z-index: 1;
  background-color: ${({ theme }) => theme.palette.accent};
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1),
    0px 10px 20px rgba(0, 0, 0, 0.1), 0px 10px 50px rgba(0, 0, 0, 0.1);
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0.5em 0.6em;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary};
  &:hover {
    transition: background-color 100ms;
    background-color: ${({ theme }) => darken(0.05, theme.palette.accent)};
  }
`;
