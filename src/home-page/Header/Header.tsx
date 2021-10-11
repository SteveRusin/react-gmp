import { useState, useContext, useCallback } from 'react';

import { Modal, AddMovieModal, MovieDetailsContext } from '@shared';

import { HeaderTopWrapper } from './HeaderTop';
import { SearchWrapper } from './HeaderSearch';
import { HeaderWrapper } from './Header.styles';
import { MovieDetails } from './MovieDetails';

export const HomePageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { movie, showMovieDetails } = useContext(MovieDetailsContext);

  const hideMovieDetails = useCallback(() => showMovieDetails(null), []);
  const showAddMovie = useCallback(() => setIsOpen(true), []);
  const closeAddMovie = useCallback(() => setIsOpen(false), []);

  const isDetailsOpen = !!movie;

  return (
    <>
      <HeaderWrapper isDetailsOpen={isDetailsOpen}>
        <HeaderTopWrapper
          onBackToSearch={hideMovieDetails}
          showBackToSearchIcon={isDetailsOpen}
          onAddMovie={showAddMovie}
        />

        {isDetailsOpen ? (
          <MovieDetails movie={movie}></MovieDetails>
        ) : (
          <SearchWrapper />
        )}
      </HeaderWrapper>
      {isOpen && (
        <Modal>
          <AddMovieModal
            onClose={closeAddMovie}
            onSubmit={() => null /* todo */}
          ></AddMovieModal>
        </Modal>
      )}
    </>
  );
};
