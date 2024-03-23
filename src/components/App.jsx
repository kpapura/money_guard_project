import React, { useEffect } from 'react';
import Login from '../pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Register from '../pages/Register/Register';
import StatisticsTab from '../pages/StatisticsTab/StatisticsTab';
import 'modern-normalize';
import { refreshThunk } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import HomeTab from '../pages/HomeTab/HomeTab';
import TransactionsList from './Transactions/TransactionsList';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/" element={<HomeTab />}>
          <Route path="/transactions" element={<TransactionsList />} />
          </Route >
          </Route >
      </Routes>
    </div>
  );
}

export default App;
