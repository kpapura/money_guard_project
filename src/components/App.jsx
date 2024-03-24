import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefresh } from '../redux/auth/authSlice';
import { refreshThunk } from '../redux/auth/operations';
import { fetchTransactionCategoriesThunk } from '../redux/transactions/operations';

import PrivateRoute from '../../src/authRoutes/PrivateRoute';
import RestrictedRoute from '../../src/authRoutes/RestrictedRoute';

import { Layout } from './Layout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import HomeTab from '../pages/HomeTab/HomeTab';
import Loader from '../components/Loader/Loader';

import 'modern-normalize';
import CurrencyRates from './CurrencyRates/CurrenceRate';
import StatisticsTab from '../pages/StatisticsTab/StatisticsTab';
import 'modern-normalize';
import { refreshThunk } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import HomeTab from '../pages/HomeTab/HomeTab';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<HomeTab />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

