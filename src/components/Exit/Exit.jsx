import React from 'react';

import s from './Exit.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../redux/auth/operations';

export const Exit = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutThunk());
    dispatch(logout());
    closeModal();
    navigate('/');
  };
  return (
    <div className={s.wrap}>
      <a href="" className={s.logo}>
        <svg width="36" height="36">
          <use href="../../img/sprite.svg#icon-logo"></use>
        </svg>
        Money Guard
      </a>
      <p className={s.text}>Are you sure you want to log out?</p>

      <button className="modalButtonColor" onClick={onLogout}>
        Logout
      </button>
      <button className="modalButton" onClick={closeModal}>
        Cancel
      </button>
    </div>
  );
};
