import styled from 'styled-components';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const LoadingOverlay = () => <Overlay>Loading...</Overlay>;
