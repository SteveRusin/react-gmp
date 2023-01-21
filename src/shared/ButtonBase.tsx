import styled from 'styled-components';

export const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1em;
  padding: 0.55em 0.9em;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  transition: transform 50ms;
  color: inherit;

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

