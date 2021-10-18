import styled from 'styled-components';
import { FC } from 'react';

const ErrorContainer = styled.div`
  display: flex;
  place-content: center;
  flex: 1;

  color: ${({ theme }) => theme.palette.primary};
  font-size: 4rem;
`;

export const Error: FC = ({ children }) => (
  <ErrorContainer>{children}</ErrorContainer>
);
