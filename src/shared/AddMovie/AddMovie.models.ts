import { useFormik, FormikProps } from 'formik';

import { Movie } from '@api/Movies';

export interface AddMovieProps {
  movie?: Movie;
  formik: FormikProps<Movie>;
}

export interface AddMovieModalProps {
  movie?: Movie;
  onClose: () => void;
  onSubmit: (movie: Movie) => void;
}

