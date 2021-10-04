import styled from 'styled-components';

export const SearchInput = styled.input`
  background-color: ${({theme}) => theme.palette.secondary};
  padding: 1.6rem 1.9rem;
  border: none;
  opacity: 0.7;
  border-radius: 4px;
  color: ${({theme}) => theme.palette.textPrimary};
  font-size: 1em;
`;
