import styled from 'styled-components';

const DividerWrapper = styled.div`
  position: relative;
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);

  .active-control-indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 28px;
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;

export const ControlsDivider = () => {
  return (
    <DividerWrapper>
      <div className='active-control-indicator'>&nbsp;</div>
    </DividerWrapper>
  );
};
