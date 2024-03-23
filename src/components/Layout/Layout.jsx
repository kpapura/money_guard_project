import React from 'react';


import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/authSlice';

import Loader from '../Loader/Loader'

import s from './Layout.module.css'

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={s.layoutWrapper}>
      
          {isLoading && <Loader />}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
      
    </div>
  );
};

export default Layout;