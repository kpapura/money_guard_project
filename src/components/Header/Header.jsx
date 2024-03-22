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
  console.log(user);
  return (
    <header className={s.header}>
      <div className={s.hederContainer}>
        {/* <Link to="/" className={s.logo}> */}
        <a href="" className={s.logo}>
          <svg width="24" height="23">
            <use href="../../img/sprite.svg#icon-logo"></use>
          </svg>
          Money Guard
        </a>
        {/* </Link > */}
        <div className={s.wrap}>
          {' '}
          <p className={s.user}>{user.email}</p>
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
