import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Login_RegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm';

import { registerThunk } from '../../redux/auth/operations';
import { registerSchema } from '../../Schemas/registerShema';
import 'react-toastify/dist/ReactToastify.css';
import s from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        navigation('/home');
      })
      .catch(error => {
        console.log(error);
        toast(error);
      });
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
