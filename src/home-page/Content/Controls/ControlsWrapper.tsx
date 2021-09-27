import styled from 'styled-components';

import { CategoryControls } from './CategoryControls';
import { SortControl } from './SortControl';
import { ControlsDivider } from './ControlsDivider';

const Wrapper = styled.div`
  .controls-container {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.palette.textPrimary};
    font-size: 1.6rem;
  }

  .category-button {
    box-shadow: none;
    padding-left: 0;
    padding-right: 0;
    margin-right: 0.9em;
  }

  .category-controls-wrapper {
    display: flex;
    align-items: center;
  }

  .sort-wrapper {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .sort-label {
    opacity: 0.6;
  }
`;

export const ControlsWrapper = () => {
  return (
    <Wrapper>
      <div className='controls-container'>
        <div className='category-controls-wrapper'>
          <CategoryControls />
        </div>
        <div className='sort-wrapper'>
          <SortControl />
        </div>
      </div>
      <ControlsDivider />
    </Wrapper>
  );
};
