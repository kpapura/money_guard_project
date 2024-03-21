import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login_RegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm';
import { registerThunk } from '../../redux/auth/operations';
import { registerSchema } from '../../Schemas/registerShema';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = data => {
    dispatch(registerThunk(data));
    navigation('/login');
  };

  return (
    <div>
      <Login_RegisterForm
        onDataSubmit={handleSubmit}
        formType={'register'}
        schema={registerSchema}
      />
    </div>
  );
};

export default Register;
