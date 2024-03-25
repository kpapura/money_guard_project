import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';
import NavBar from './NavBar/NavBar';
import Balance from './Balance/Balance';
import CurrencyRates from './CurrencyRates/CurrenceRate';

import useResize from '../hooks/useResize';
import { selectIsLoggedIn } from '../redux/auth/authSlice';
import s from './Layout/Layout';

export const Layout = () => {
  const isAuth = useSelector(selectIsLoggedIn);
  const screenWidth = useResize().windowWidth;

  return !isAuth ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Outlet />
    </>
  );
};
