import React from 'react';
import s from './LoginRegisterForm.module.css';

const InputField = ({ register, errors, name, placeholder, className }) => {
  return (
    <>
      <div className={s.error_cont}>
        <label className={s.name_label}>
          {name === 'username' ? (
            <div className={s.name_user_icon}>
              <svg width="20" height="24">
                <use href="../../img/sprite.svg#icon-user"></use>
              </svg>{' '}
            </div>
          ) : (
            <div className={s.icon_email_cont}>
              <svg width="20" height="24">
                <use href="../../img/sprite.svg#icon-email"></use>
              </svg>
            </div>
          )}
          <input
            className={s.name_input}
            autoComplete="none"
            {...register(name)}
            type="text"
            placeholder={placeholder}
          />
        </label>{' '}
        {errors?.[name] && (
          <span className={s[className]}>{errors[name].message}</span>
        )}
      </div>
    </>
  );
};

export default InputField;
