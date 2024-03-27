import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Login_RegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm';

import { registerThunk } from '../../redux/auth/operations';
import { registerSchema } from '../../Schemas/registerShema';

import s from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(registerThunk(data));
  };

  return (
    <>
      <Login_RegisterForm
        onDataSubmit={handleSubmit}
        formType={'register'}
        schema={registerSchema}
      />
    </>
  );
};

export default Register;
