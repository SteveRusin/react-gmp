import { FC } from 'react';
import { Formik, useFormik } from 'formik';

import { MovieGenre, Movie } from '@api/Movies';
import { Label, Input } from '@shared/FormControls';
import { Select } from '@shared';

import { AddMovieForm, MovieDescription } from './AddMovie.styles';
import { AddMovieProps } from './AddMovie.models';
import { GENRE_OPTIONS } from './AddMovie.constants';

export const AddMovie: FC<AddMovieProps> = ({ movie, formik }) => {
  const { values, handleChange } = formik;

  return (
    <>
      <AddMovieForm>
        <div className='form-left'>
          <Label>
            TITLE
            <Input
              name='title'
              value={values.title}
              placeholder='Enter movie title'
              onChange={handleChange}
            />
          </Label>
          <Label>
            MOVIE URL
            <Input
              name='coverUrl'
              value={values.coverUrl}
              placeholder='https://'
              onChange={handleChange}
            />
          </Label>
          <Label>
            GENRE
            <Select<MovieGenre>
              multi={true}
              value={values.genre}
              options={GENRE_OPTIONS}
              onSelect={(ids) => formik.setFieldValue('genre', ids)}
              placeholder='Select genre'
            />
          </Label>
        </div>
        <div className='form-right'>
          <Label>
            {/*Should be a datepicker. Use input for now*/}
            RELEASE DATE
            <Input
              readOnly
              name='releaseDate'
              value={values.releaseDate}
              placeholder='Select Date'
            />
          </Label>
          <Label>
            RATING
            <Input
              value={values.rating}
              name='rating'
              placeholder='7.8'
              onChange={handleChange}
            />
          </Label>
          <Label>
            RUNTIME
            <Input
              value={values.runtime}
              name='runtime'
              type="number"
              placeholder='minutes'
              onChange={handleChange}
            />
          </Label>
        </div>
      </AddMovieForm>
      <Label style={{ flex: 1 }}>
        OVERVIEW
        <MovieDescription
          name='description'
          value={values.description}
          onChange={handleChange}
          placeholder='Movie description'
        />
      </Label>
    </>
  );
};
