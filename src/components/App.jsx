import React from 'react';
import Login from '../pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Register from '../pages/Register/Register';

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}
