import React from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import s from './LoginRegisterForm.module.css';

const ProgressBar = ({ password }) => {
  return (
    <div className={s.porgress_container}>
      <PasswordStrengthBar
        password={password}
        minLength={6}
        scoreWordStyle={{ display: 'none' }}
        className={s.porgress_bar}
        style={{
          maxWidth: '280px',
          gap: 'none',
          fontSize: '0px',
        }}
      />
    </div>
  );
};

export default ProgressBar;
