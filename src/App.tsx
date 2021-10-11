import { useState } from 'react';

import { Movie } from '@api/Movies';
import { Footer, FlexColumnContainer, MovieDetailsContext } from '@shared';

import { HomePageHeader, Content } from './home-page';


export default function App() {
  const [movieWithDetails, setMovieWithDetails] = useState<Movie | null>(null);

  return (
    <MovieDetailsContext.Provider
      value={{
        movie: movieWithDetails,
        showMovieDetails: setMovieWithDetails,
      }}
    >
      <HomePageHeader />
      <FlexColumnContainer>
        <Content />
      </FlexColumnContainer>
      <Footer />
    </MovieDetailsContext.Provider>
  );
}
