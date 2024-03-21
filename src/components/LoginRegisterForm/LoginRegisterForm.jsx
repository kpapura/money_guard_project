import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import s from './LoginRegisterForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from './InputField';
import PassInputField from './PassInputField';

const LoginRegisterForm = ({ onDataSubmit, formType, schema }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const submit = data => {
    delete data.passwordConfirmation;
    onDataSubmit(data);
    console.log(data);
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(submit)}>
      {formType === 'register' && (
        <InputField
          register={register}
          errors={errors}
          name="username"
          placeholder="Name"
        />
      )}
      <InputField
        register={register}
        errors={errors}
        name="email"
        placeholder="Email"
      />
      <PassInputField
        register={register}
        errors={errors}
        name="password"
        placeholder="Password"
      />

      {formType === 'register' && (
        <>
          <PassInputField
            register={register}
            errors={errors}
            name="passwordConfirmation"
            placeholder="Confirm password"
          />
        </>
      )}
      {formType === 'login' ? (
        <>
          <NavLink to="/login" onClick={handleSubmit(submit)}>
            LOG IN
          </NavLink>
          <NavLink to="/register">REGISTER</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" onClick={handleSubmit(submit)}>
            REGISTER
          </NavLink>
          <NavLink to="/login">LOGIN</NavLink>
        </>
      )}
      <button hidden></button>
    </form>
  );
};

export default LoginRegisterForm;
