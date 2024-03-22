import React from 'react';

import s from './Exit.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const Exit = ({ closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logout);
    navigate('/login');
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

      <button onClick={logout}>Logout</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};
