import { FC } from 'react';

import { ButtonPrimary } from '@shared';
import { CloseModal, ModalTitle, ModalHeader } from '@shared/Modal';

import { DeleteMovieWrapper } from './DeleteMovie.styles';
import { DeleteMovieProps } from './DeleteMovie.models';

export const DeleteMovie: FC<DeleteMovieProps> = ({ onClose, onConfirm }) => {
  return (
    <DeleteMovieWrapper>
      <ModalHeader>
        <ModalTitle>DELETE MOVIE</ModalTitle>
        <CloseModal size='24' onClick={onClose} />
      </ModalHeader>
      <div>Are you sure you want to delete this movie?</div>
      <ButtonPrimary className="confirm-button" onClick={onConfirm}>CONFIRM</ButtonPrimary>
    </DeleteMovieWrapper>
  );
};
