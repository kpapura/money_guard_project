import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { lazy } from 'react';

import Loader from '../Loader/Loader';

import useResize from '../../hooks/useResize';
import { selectIsLoggedIn, selectIsLoading } from '../../redux/auth/authSlice';

import s from './Layout.module.css';

const Header = lazy(() => import("../Header/Header"));
const Balance = lazy(() => import("../Balance/Balance"));
const CurrencyRates = lazy(() => import("../CurrencyRates/CurrenceRate"));
const NavBar = lazy(() => import("../NavBar/NavBar"));

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const isAuth = useSelector(selectIsLoggedIn);
  const screenWidth = useResize().windowWidth;

  return !isAuth ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      {isLoading && <Loader />}
      <Header />
        <div className={s.walletContainer}>
           <div className={s.backgroundContainer_home}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={s.backgroundContainer_statistic}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={s.mainContainer}>
          <div className={s.commonInfo}>
            <div className={s.wrap}>
              <NavBar className={s.navBar} />
              {screenWidth >= 768 && <Balance />}
            </div>
            {screenWidth >= 768 && <CurrencyRates />}
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Layout;
