import styled from 'styled-components';

export const MenuWrapper = styled.div``;

export const ItemsWrapper = styled.div`
  position: absolute;
  right: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.accent};
  padding: 10px 0;
  min-width: 190px;

  .menu-item {
    padding: 10px 15px;

    &:hover {
      transition: background-color 100ms linear;
      background-color: ${({ theme }) => theme.palette.primary};
    }
  }
`;
