import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  gap: 1em;
  flex-direction: column;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
`;
