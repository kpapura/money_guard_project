import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefresh } from '../redux/auth/authSlice';
import { refreshThunk } from '../redux/auth/operations';

import PrivateRoute from '../../src/authRoutes/PrivateRoute'
import RestrictedRoute from '../../src/authRoutes/RestrictedRoute'

import { Layout } from './Layout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import HomeTab from '../pages/HomeTab/HomeTab';
import Loader from '../components/Loader/Loader';

import 'modern-normalize';
import CurrencyRates from './CurrencyRates/CurrenceRate';
import StatisticsTab from '../pages/StatisticsTab/StatisticsTab';

function App() {
  const isAuth = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (<Loader/>) : (
    <>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RestrictedRoute component={Login} redirectTo='/home'/>} />
          <Route path="register" element={<RestrictedRoute component={Register} redirectTo='/home'/>} />
          <Route path="/home" element={<PrivateRoute component={HomeTab} redirectTo='/'/>} />
          <Route path="/statistics" element={<PrivateRoute component={StatisticsTab} redirectTo='/'/>} />
          <Route path="/currency" element={<PrivateRoute component={CurrencyRates} redirectTo='/'/>} />
        </Route>
          <Route path='*' element={!isAuth ? <Navigate to='/'/> : <Navigate to='/home'/>}/>
      </Routes>
      </Suspense>
    </>
  );
}

export default App;

