import { FC, useContext, useState } from 'react';

import {
  MovieDetailsContext,
  AddMovieModal,
  DeleteMovie,
  Modal,
} from '@shared';
import { Movie as MovieModel } from '@api/Movies';

import { Movie } from './Movie';
import { MoviesProps } from './Movies.models';
import { Wrapper } from './Movies.styles';
import { MenuItemsIds } from './Movies.constants';

export const MoviesWrapper: FC<MoviesProps> = ({ movies }) => {
  const { showMovieDetails } = useContext(MovieDetailsContext);
  const [editMovieOpen, setEditMovieOpen] = useState(false);
  const [deleteMovieOpen, setDeleteMovieOpen] = useState(false);
  const [targetMovie, setTargetMovie] = useState<MovieModel | null>(null);
  const showEditModal = editMovieOpen && targetMovie;
  const showDeleteModal = deleteMovieOpen && targetMovie;

  return (
    <>
      <Wrapper>
        {movies.map((movie) => (
          <Movie
            onMenuItemClick={(id) => {
              if (id === MenuItemsIds.EditMovie) {
                setEditMovieOpen(true);
              } else if (id === MenuItemsIds.DeleteMovie) {
                setDeleteMovieOpen(true);
              }
              setTargetMovie(movie);
            }}
            onMovieClick={showMovieDetails}
            movie={movie}
            key={movie.id}
          />
        ))}
      </Wrapper>
      {showDeleteModal && (
        <Modal>
          <DeleteMovie
            onClose={() => {
              setTargetMovie(null);
              setDeleteMovieOpen(false);
            }}
            onConfirm={() => null}
          />
        </Modal>
      )}
      {showEditModal && (
        <Modal>
          <AddMovieModal
            movie={targetMovie}
            onClose={() => {
              setTargetMovie(null);
              setEditMovieOpen(false);
            }}
            onSubmit={() => {
              // do nothing for now
              setTargetMovie(null);
              setEditMovieOpen(false);
            }}
          />
        </Modal>
      )}
    </>
  );
};
