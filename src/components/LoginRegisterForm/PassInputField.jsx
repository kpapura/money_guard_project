import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import ProgressBar from './ProgressBar';

const PassInputField = ({ register, errors, name, placeholder, getValues }) => {
  const [type, setType] = useState('password');
  const [confPassword, setConfPassword] = useState('');

  function handleChange(e) {
    setConfPassword(e.target.value);
  }

  return (
    <label>
      <input
        autoComplete={name}
        {...register(name, {
          required: 'Password is required',
          validate: value => {
            value === getValues('password') || 'Passwords do not match';
          },
        })}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />{' '}
      <div
        onClick={() => {
          setType(type === 'password' ? 'text' : 'password');
        }}
      >
        {type === 'password' ? <AiFillEyeInvisible /> : <AiFillEye />}
      </div>
      {errors?.[name] && <span>{errors[name].message}</span>}
      {name === 'passwordConfirmation' && (
        <ProgressBar password={confPassword} />
      )}
    </label>
  );
};

export default PassInputField;
