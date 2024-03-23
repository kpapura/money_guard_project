import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSlice';

import { Header } from './Header/Header';
import NavBar from './NavBar/NavBar';

export const Layout = () => {
  const isAuth = useSelector(selectIsLoggedIn);


  return !isAuth ? (<>
  <Outlet />
  </>) : 
  (
    <>
      <Header />
      <NavBar/>
      <Outlet />
    </>
  );
};
