import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginRegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm';
import { loginThunk } from '../../redux/auth/operations';
import { loginSchema } from '../../Schemas/loginShema';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  const values = {
    email: 'tomato9@gmail.com',
    password: '0000000',
  };
  return (
    <div>
      <LoginRegisterForm
        formType={'login'}
        onDataSubmit={handleSubmit}
        values={values}
        schema={loginSchema}
      />
    </div>
  );
};

export default Login;
