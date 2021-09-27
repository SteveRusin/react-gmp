import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  padding: ${({ theme }) => theme.size.pageVerticalPadding}
    ${({ theme }) => theme.size.pageHorizontalPadding} 10px;

  background-color: ${({ theme }) => theme.palette.accent};
`;
