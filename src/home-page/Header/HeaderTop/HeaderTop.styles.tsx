import styled from 'styled-components';

import { Search } from '@styled-icons/octicons';

import { ButtonSecondary } from '@shared';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.size.pageVerticalPadding}
    ${(props) => props.theme.size.pageHorizontalPadding} 0;
`;

export const BackToSearch = styled(Search)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary};
`;

export const AddMovie = styled(ButtonSecondary)`
  font-size: 2rem;
`;
