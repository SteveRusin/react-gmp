import { useState, useContext, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { createMovie } from '@api/Movies';

import { Modal, AddMovieModal, MovieDetailsContext } from '@shared';
import { useDispatchFetchMovieFromApi } from '@store';

import { HeaderTopWrapper } from './HeaderTop';
import { SearchWrapper } from './HeaderSearch';
import { HeaderWrapper } from './Header.styles';
import { MovieDetails } from './MovieDetails';

export const HomePageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { movie, showMovieDetails } = useContext(MovieDetailsContext);
  const dispatchFetchMovies = useDispatchFetchMovieFromApi();

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
            onSubmit={async (movie) => {
              try {
                await createMovie(movie);
                dispatchFetchMovies();
                closeAddMovie();
              } catch (e) {
                console.log('error:', e);
              }
            }}
          ></AddMovieModal>
        </Modal>
      )}
    </>
  );
};
