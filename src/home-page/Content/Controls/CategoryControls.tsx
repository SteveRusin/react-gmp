import { useDispatch } from 'react-redux';

import { FC } from 'react';

import { MovieGenre } from '@api/Movies';
import { filterByGenre } from '@store';

import { ButtonBase } from '@shared';

import { CategoryControlsProps } from './Controls.models';

export const CategoryControls: FC<CategoryControlsProps> = ({
  onGenreFilterChange,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <ButtonBase
        key='ALL'
        className='category-button'
        onClick={(e) => {
          dispatch(filterByGenre(null));

          const target = e.target as HTMLElement;
          onGenreFilterChange({
            widthPx: target.clientWidth,
            leftOffsetPx: target.offsetLeft,
          });
        }}
      >
        ALL
      </ButtonBase>
      {Object.values(MovieGenre).map((genre) => (
        <ButtonBase
          className='category-button'
          key={genre}
          onClick={(e) => {
            dispatch(filterByGenre(genre));

            const target = e.target as HTMLElement;
            onGenreFilterChange({
              widthPx: target.clientWidth,
              leftOffsetPx: target.offsetLeft,
            });
          }}
        >
          {genre.toUpperCase()}
        </ButtonBase>
      ))}
    </>
  );
};
