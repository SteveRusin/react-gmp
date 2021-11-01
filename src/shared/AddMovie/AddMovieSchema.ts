import { object, string, number, array } from 'yup';

export const addMovieSchema = object().shape({
  title: string().required(),
  runtime: number().required(),
  description: string().required(),
  coverUrl: string().url().required(),
  genre: array().required(),
});
