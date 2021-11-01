import { FC, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  MovieDetailsContext,
  AddMovieModal,
  DeleteMovie,
  Modal,
} from '@shared';
import { Movie as MovieModel, updateMovie, deleteMovie } from '@api/Movies';
import { fetchMoviesFromAPI } from '@store';

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
  const dispatch = useDispatch();

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
            onConfirm={async () => {
              try {
                await deleteMovie(targetMovie.id);
                dispatch(fetchMoviesFromAPI());
                setTargetMovie(null);
                setEditMovieOpen(false);
              } catch (e) {
                console.log('error:', e);
              }
            }}
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
            onSubmit={async (movie) => {
              try {
                await updateMovie(movie);
                dispatch(fetchMoviesFromAPI());
                setTargetMovie(null);
                setEditMovieOpen(false);
              } catch (e) {
                console.log('error:', e);
              }
            }}
          />
        </Modal>
      )}
    </>
  );
};
