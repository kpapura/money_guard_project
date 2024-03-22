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
  const submit = dataS => {
    const { passwordConfirmation, ...data } = dataS;
    onDataSubmit(data);
    reset();
  };

  return (
    <section className={s.front_section}>
      <div
        className={s.form_container}
        style={{ padding: formType === 'login' ? '98px' : '23px' }}
      >
        <a
          href=""
          className={s.logo_wrapper}
          style={{ paddingBottom: formType === 'login' ? '11px' : '0px' }}
        >
          <svg width="25.5" height="25.5">
            <use href="../../img/sprite.svg#icon-logo"></use>
          </svg>
          Money Guard
        </a>
        <form className={s.form} onSubmit={handleSubmit(submit)}>
          {formType === 'register' && (
            <InputField
              register={register}
              errors={errors}
              name="username"
              placeholder="Name"
              className="username"
            />
          )}
          <InputField
            register={register}
            errors={errors}
            name="email"
            placeholder="E-mail"
            className="email"
          />
          <PassInputField
            register={register}
            errors={errors}
            name="password"
            placeholder="Password"
            onChange={e => handleChange(e)}
            formType={formType}
            className="password"
          />
          {formType === 'register' && (
            <>
              <PassInputField
                register={register}
                errors={errors}
                name="passwordConfirmation"
                placeholder="Confirm password"
                className="cpassword"
              />
            </>
          )}
          {formType === 'login' ? (
            <div className={s.button_cont}>
              <button className={s.submit_btn} type="submit">
                log in
              </button>
              <NavLink className={s.inactive_btn} to="/register">
                register
              </NavLink>
            </div>
          ) : (
            <div className={s.button_cont}>
              <button className={s.submit_btn} type="submit">
                register
              </button>
              <NavLink className={s.inactive_btn} to="/login">
                log in
              </NavLink>
            </div>
          )}{' '}
        </form>
      </div>
    </section>
  );
};

export default LoginRegisterForm;
