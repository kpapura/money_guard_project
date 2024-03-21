import React from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';

const ProgressBar = ({ password }) => {
  return (
    <>
      <PasswordStrengthBar
        password={password}
        minLength={6}
        scoreWordStyle={{ display: 'none' }}
      />
    </>
  );
};

export default ProgressBar;