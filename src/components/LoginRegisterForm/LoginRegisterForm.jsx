import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import s from './LoginRegisterForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from './InputField';
import PassInputField from './PassInputField';
import sprite from '../../img/sprite.svg';

const LoginRegisterForm = ({ onDataSubmit, formType, schema }) => {
  const [size, setSize] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <>
      <section
        className={
          formType === 'login'
            ? `${s.login_register_section}`
            : `${s.register_login_section}`
        }
      >
        {formType === 'login' ? (
          <>
            <div className={s.background_container_login}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>{' '}
            <div className={s.background_img_container_login}>
              <div></div>
              <div></div>
            </div>
          </>
        ) : (
          <>
            <div className={s.background_container_registration}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={s.background_img_container_registration}>
              <div></div>
              <div></div>
            </div>
          </>
        )}

        <div
          className={
            formType === 'login'
              ? s.form_container_login
              : s.form_container_register
          }
        >
          <a
            href=""
            className={s.logo_wrapper}
            style={{ paddingBottom: formType === 'login' ? '11px' : '0px' }}
          >
            {size < 768 ? (
              <svg width="25.5" height="25.5">
                <use xlinkHref={`${sprite}#icon-logo`} />
              </svg>
            ) : (
              <svg width="36" height="36">
                <use xlinkHref={`${sprite}#icon-logo`} />
              </svg>
            )}
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
    </>
  );
};

export default LoginRegisterForm;
