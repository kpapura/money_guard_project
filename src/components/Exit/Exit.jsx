import React from 'react';

import s from './Exit.module.css';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';

export const Exit = ({ closeModal }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutThunk());
    closeModal();
  };
  return (
    <div>
      <a href="" className={s.logo}>
        <svg width="16" height="16">
          <use href="../../img/sprite.svg#icon-logo"></use>
        </svg>
        Money Guard
      </a>
      <p>Are you sure you want to log out?</p>

      <button onClick={logout}>Logout</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};
