import React from 'react';

import s from '../Form.module.css';

const FormInput = ({ name, register, errors, placeholder, className }) => {
  return (
    <div className={s.inputContainer}>
      <input
        autoComplete="off"
        className={className}
        {...register(name)}
        placeholder={placeholder}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </div>
  );
};

export default FormInput;
