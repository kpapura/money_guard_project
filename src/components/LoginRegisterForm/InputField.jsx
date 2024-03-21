import React from 'react';

const InputField = ({ register, errors, name, placeholder }) => {
  return (
    <label>
      <input
        autoComplete={name}
        {...register(name)}
        type="text"
        placeholder={placeholder}
      />
      {errors?.[name] && <span>{errors[name].message}</span>}
    </label>
  );
};

export default InputField;
