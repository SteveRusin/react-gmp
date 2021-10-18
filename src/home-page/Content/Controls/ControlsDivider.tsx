import { FC } from 'react';

import { DividerWrapper } from './Controls.styles';

import { ControlsProps } from './Controls.models';

export const ControlsDivider: FC<ControlsProps> = ({
  leftOffsetPx,
  widthPx,
}) => {
  return (
    <DividerWrapper widthPx={widthPx} leftOffsetPx={leftOffsetPx}>
      <div className='active-control-indicator'>&nbsp;</div>
    </DividerWrapper>
  );
};
