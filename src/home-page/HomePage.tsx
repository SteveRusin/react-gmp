import { Footer, FlexColumnContainer } from '@shared';

import { HomePageHeader } from './Header';
import { Content } from './Content';

export const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <FlexColumnContainer>
        <Content />
      </FlexColumnContainer>
      <Footer />
    </>
  );
};
