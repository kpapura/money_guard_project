import React from 'react';
// import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSlice';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import { Exit } from '../Exit/Exit';

export const Header = () => {
  const { isOpen, toggle } = useModal();
  const user = useSelector(selectUser);
  return (
    <header className={s.header}>
      {/* <Link> */}
      <a href="" className={s.logo}>
        <svg width="16" height="16">
          <use href="../../img/sprite.svg#icon-logo"></use>
        </svg>
        Money Guard
      </a>

      {/* </Link> */}
      <div className={s.wrap}>
        {' '}
        <p>{user}User</p>
        <button className={s.button} onClick={toggle}>
          {' '}
          <svg width="16" height="16">
            <use href="../../img/sprite.svg#icon-exit"></use>
          </svg>
        </button>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          <Exit closeModal={toggle} />
        </Modal>
      )}
    </header>
  );
};
