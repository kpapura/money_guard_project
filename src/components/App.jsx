import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from '../components/Layout/Layout.jsx';
import Loader from '../components/Loader/Loader';

import PrivateRoute from '../../src/authRoutes/PrivateRoute';
import RestrictedRoute from '../../src/authRoutes/RestrictedRoute';

import { refreshThunk } from '../redux/auth/operations';
import { selectIsLoggedIn, selectIsRefresh } from '../redux/auth/authSlice';
import { fetchTransactionCategoriesThunk } from '../redux/transactions/operations';
import { useDashboard } from '../hooks/useDashboard.jsx';
import 'modern-normalize';

const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const HomeTab = lazy(() => import('../pages/HomeTab/HomeTab'));
const CurrencyRates = lazy(() => import('./CurrencyRates/CurrenceRate'));
const StatisticsTab = lazy(() =>
  import('../pages/StatisticsTab/StatisticsTab')
);

function App() {
  const isAuth = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefresh);
  const {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isRetina,
    isMobile,
  } = useDashboard();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
    dispatch(fetchTransactionCategoriesThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            index
            element={<RestrictedRoute component={Login} redirectTo="/home" />}
          />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/home" />
            }
          />
          <Route path="/" element={<Layout />}>
            <Route
              path="/home"
              element={<PrivateRoute component={HomeTab} redirectTo="/" />}
            />
            <Route
              path="/statistics"
              element={
                <PrivateRoute component={StatisticsTab} redirectTo="/" />
              }
            />
            {isMobile && (
              <Route
                path="/currency"
                element={
                  <PrivateRoute component={CurrencyRates} redirectTo="/" />
                }
              />
            )}
          </Route>
          <Route
            path="*"
            element={!isAuth ? <Navigate to="/" /> : <Navigate to="/home" />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
