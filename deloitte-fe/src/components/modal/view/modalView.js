/* eslint-disable */
import React from 'react';
import ModalContainer from '../container/modalContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/fontawesome-free-solid';

// Components
import '../styles/modalStyles.scss';

const Modal = ({ visible, closeModal, children }) => (
  <ModalContainer>
      <div style={{ display: visible}} className="modal">
        <div className="modal-content">
            <span onClick={() => closeModal()} className="close">&times;</span>
            <div className="modal-content-children">
              {children}
            </div>
        </div>
    </div>

  </ModalContainer>
);

export default Modal;
