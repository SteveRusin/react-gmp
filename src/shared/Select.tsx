import { TriangleDown } from '@styled-icons/octicons';
import styled, { useTheme } from 'styled-components';

const SelectTriangle = styled(TriangleDown)`
  color: ${(props) => props.color};
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 150px;

  cursor: pointer;
`;

// todo make it interactive in next HW

export const Select = () => {
  const { palette } = useTheme();
  return (
    <SelectWrapper>
      <span>RELEASE DATE</span>
      <SelectTriangle color={palette.primary} size='20' />
    </SelectWrapper>
  );
};
