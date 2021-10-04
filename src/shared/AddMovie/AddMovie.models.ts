import { Movie } from '@api/Movies';

export interface AddMovieProps {
  movie?: Movie;
}

export interface AddMovieModalProps extends AddMovieProps {
  onClose: () => void;
  onSubmit: () => void;
  onReset: () => void;
}

