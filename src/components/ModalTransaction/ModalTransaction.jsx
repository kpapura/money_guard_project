import { useCallback, useEffect } from 'react';
import React from 'react';
import s from './ModalTransaction.module.css';

const modalRoot = document.querySelector('#modal');

export function ModalTransaction({ children, closeModal }) {
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
    <div className={s.modalWrapper} onClick={handleBackdropClick}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={closeModal}>
          x
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
