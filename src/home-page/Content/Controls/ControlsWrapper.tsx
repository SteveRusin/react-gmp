import { FC, useState } from 'react';

import { CategoryControls } from './CategoryControls';
import { SortControl } from './SortControl';
import { ControlsDivider } from './ControlsDivider';
import { SortControlProps, ControlsProps } from './Controls.models';

import { Wrapper } from './Controls.styles';

export const ControlsWrapper: FC<SortControlProps> = (props) => {
  const [controlProps, setControlProps] = useState<ControlsProps>({
    leftOffsetPx: 0,
    widthPx: 28,
  });

  return (
    <Wrapper>
      <div className='controls-container'>
        <div className='category-controls-wrapper'>
          <CategoryControls onGenreFilterChange={setControlProps} />
        </div>
        <div className='sort-wrapper'>
          <SortControl {...props} />
        </div>
      </div>
      <ControlsDivider
        leftOffsetPx={controlProps.leftOffsetPx}
        widthPx={controlProps.widthPx}
      />
    </Wrapper>
  );
};
