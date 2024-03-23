import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login_RegisterForm from '../../components/LoginRegisterForm/LoginRegisterForm';
import { registerThunk } from '../../redux/auth/operations';
import { registerSchema } from '../../Schemas/registerShema';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then(data => {
        navigation('/login');
      })
      .catch(error => {
        console.log(error);
        toast(error);
      });
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
