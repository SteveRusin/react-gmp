import { FC } from 'react';
import { useFormik } from 'formik';

import { Movie } from '@api/Movies';

import { ButtonPrimary, ButtonPrimaryOutline } from '@shared';
import { CloseModal, ModalTitle, ModalHeader } from '@shared/Modal';

import { AddMovie } from './AddMovie';
import { AddMovieModalProps } from './AddMovie.models';
import {
  AddMovieModalWrapper,
  AddMovieActionsWrapper,
  ContentWrapper,
  Errors,
} from './AddMovie.styles';
import { addMovieSchema } from './AddMovieSchema';

export const AddMovieModal: FC<AddMovieModalProps> = ({
  movie,
  onClose,
  onSubmit,
}) => {
  const defaultMovie = {} as Movie;
  const formik = useFormik<Movie>({
    initialValues: movie || defaultMovie,
    onSubmit(movie) {
      onSubmit(movie);
    },
    validationSchema: addMovieSchema,
  });

  return (
    <AddMovieModalWrapper>
      <ModalHeader>
        <ModalTitle>{movie ? 'EDIT MOVIE' : 'ADD MOVIE'}</ModalTitle>
        <CloseModal size='24' onClick={onClose} />
      </ModalHeader>
      <ContentWrapper>
        <AddMovie movie={movie} formik={formik}></AddMovie>
        {formik.errors && (
          <Errors>
            {Object.values(formik.errors).map((error) => (
              <div>{error}</div>
            ))}
          </Errors>
        )}
      </ContentWrapper>
      <AddMovieActionsWrapper>
        <ButtonPrimaryOutline>RESET</ButtonPrimaryOutline>
        <ButtonPrimary
          type='submit'
          disabled={!formik.isValid}
          onClick={() => formik.submitForm()}
        >
          SUBMIT
        </ButtonPrimary>
      </AddMovieActionsWrapper>
    </AddMovieModalWrapper>
  );
};
