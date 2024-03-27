import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import s from './Modal.module.css';
import sprite from "../../img/sprite.svg"
const modalRoot = document.querySelector('#modal');

const Modal = ({ closeModal, children }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return ReactDOM.createPortal(
    <div onClick={handleBackdropClick} className={s.modalWrapper}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={closeModal}>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
