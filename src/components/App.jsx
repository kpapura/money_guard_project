import React, { useEffect } from 'react';
import Login from '../pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Register from '../pages/Register/Register';
import StatisticsTab from '../pages/StatisticsTab/StatisticsTab';
import 'modern-normalize';
import TransactionsList from './Transactions/TransactionsList';
import { refreshThunk } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ height: '80px' }}>Hello</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <TransactionsList />
    </div>
  );
}

export default App;
