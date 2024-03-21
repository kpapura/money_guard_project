import React from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../../pages/Login/Login';

const Layout = () => {
  return (
    <main>
      {/* <Login /> */}
      <Outlet />
    </main>
  );
};

export default Layout;
