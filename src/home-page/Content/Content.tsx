import { ContentWrapper } from './ContentWrapper';

import { ControlsWrapper } from './Controls';
import { MoviesWrapper } from './Movies';

export const Content = () => {
  return (
    <ContentWrapper>
      <ControlsWrapper />
      <span>
        <b>39</b> movies found
      </span>
      <MoviesWrapper />
    </ContentWrapper>
  );
};
