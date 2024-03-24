import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import sprite from '../../img/sprite.svg'

import { Exit } from '../Exit/Exit';
import Modal from '../Modal/Modal';

import { selectUser } from '../../redux/auth/authSlice';
import { useModal } from '../../hooks/useModal';
import s from './Header.module.css';

export const Header = () => {
  const { isOpen, toggle } = useModal();

  const user = useSelector(selectUser);

  const index = user.email.indexOf('@');
  const userEmail = user.email.slice(0, index);

  return (
    <header className={s.header}>
      <div className={s.hederContainer}>
        <Link to="/" className={s.logo}>
          <svg width="24" height="23">
            <use  xlinkHref={`${sprite}#icon-logo`}></use>
          </svg>
          Money Guard
        
        </Link >
        <div className={s.wrap}>
          {' '}
          <p className={s.user}>{userEmail}</p>
          <button className={s.button} onClick={toggle}>
            <svg width="18" height="18" className={s.icon}>
              <use href="../../img/sprite.svg#icon-exit"></use>
            </svg>{' '}
            Exit
          </button>
        </div>
        {isOpen && (
          <Modal closeModal={toggle}>
            <Exit closeModal={toggle} />
          </Modal>
        )}
      </div>
    </header>
  );
};
