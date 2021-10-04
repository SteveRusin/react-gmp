import { PureComponent } from 'react';
import { createPortal } from 'react-dom';

import { ModalOverlay } from './ModalOverlay';

const portalRoot = document.getElementById('portal-root');

export class Modal extends PureComponent {
  modalContainer = document.createElement('div');

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    portalRoot!.appendChild(this.modalContainer);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
    portalRoot!.removeChild(this.modalContainer);
  }

  render() {
    return createPortal(
      <ModalOverlay>{this.props.children}</ModalOverlay>,
      this.modalContainer
    );
  }
}
