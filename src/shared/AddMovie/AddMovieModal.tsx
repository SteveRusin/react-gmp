import { PureComponent } from 'react';

import { ButtonPrimary, ButtonPrimaryOutline } from '@shared';
import { CloseModal, ModalTitle, ModalHeader } from '@shared/Modal';

import { AddMovie } from './AddMovie';
import { AddMovieModalProps } from './AddMovie.models';
import {
  AddMovieModalWrapper,
  AddMovieActionsWrapper,
  ContentWrapper,
} from './AddMovie.styles';

export class AddMovieModal extends PureComponent<AddMovieModalProps> {
  render() {
    return (
      <AddMovieModalWrapper>
        <ModalHeader>
          <ModalTitle>
            {this.props.movie ? 'EDIT MOVIE' : 'ADD MOVIE'}
          </ModalTitle>
          <CloseModal size='24' onClick={this.props.onClose} />
        </ModalHeader>
        <ContentWrapper>
          <AddMovie movie={this.props.movie}></AddMovie>
        </ContentWrapper>
        <AddMovieActionsWrapper>
          <ButtonPrimaryOutline>
            RESET
          </ButtonPrimaryOutline>
          <ButtonPrimary onClick={this.props.onSubmit}>SUBMIT</ButtonPrimary>
        </AddMovieActionsWrapper>
      </AddMovieModalWrapper>
    );
  }
}
