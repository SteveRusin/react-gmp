import { HomePageHeader, Content } from './home-page';

import { Footer, FlexColumnContainer } from '@shared';

export default function App() {
  return (
    <>
      <HomePageHeader />
      <FlexColumnContainer>
        <Content />
      </FlexColumnContainer>
      <Footer />
    </>
  );
}
