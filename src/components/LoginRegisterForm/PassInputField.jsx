import React, { useState } from 'react';

import { PiEyeClosedThin, PiEyeThin } from 'react-icons/pi';
import ProgressBar from './ProgressBar';

import s from './LoginRegisterForm.module.css';

const PassInputField = ({
  register,
  errors,
  name,
  placeholder,
  getValues,
  formType,
  className,
}) => {
  const [type, setType] = useState('password');
  const [confPassword, setConfPassword] = useState('');

  function handleChange(e) {
    setConfPassword(e.target.value);
  }
  return (
    <>
      <div className={s.error_container}>
        <label className={s.password_label}>
          <div className={s.password_icon}>
            <svg width="20" height="20">
              <use href="../../img/sprite.svg#icon-lock"></use>
            </svg>
          </div>
          <input
            autoComplete={name}
            {...register(name, {
              required: 'Password is required',
              validate: value =>
                value === getValues('password') || 'Passwords do not match',
            })}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            className={s.password_input}
          />{' '}
          <div
            className={s.eye}
            onClick={() => {
              setType(type === 'password' ? 'text' : 'password');
            }}
          >
            {type === 'password' ? (
              <PiEyeClosedThin style={{ color: 'rgba(255, 255, 255, 0.4)' }} />
            ) : (
              <PiEyeThin style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
            )}
          </div>
        </label>
        {errors?.[name] && (
          <span className={s[className]}>{errors[name].message}</span>
        )}
      </div>
      {name === 'password' && formType !== 'login' && (
        <ProgressBar password={confPassword} />
      )}
    </>
  );
};

export default PassInputField;
