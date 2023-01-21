import styled from 'styled-components';
import { transparentize } from 'polished';

export const TextArea = styled.textarea`
  background-color: ${({ theme }) =>
    transparentize(0.1, theme.palette.secondary)};
    padding: 0.7em 0.8em;
    border: none;
    color: ${({theme}) => theme.palette.textPrimary};
    font-size: 1.2em;
    border-radius: 4px;
`;
