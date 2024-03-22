import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <div>
      <h1>helo</h1>
      <Header />
      <Outlet />
    </div>
  );
};
