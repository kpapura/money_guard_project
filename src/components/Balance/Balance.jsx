import React from 'react';
import { useSelector } from 'react-redux';

import { selectBalance } from '../../redux/auth/authSlice';
import s from './Balance.module.css';

function Balance() {
  let balance = useSelector(selectBalance);

  const formattedBalance = balance.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className={s.wrapper}>
      <p className={s.title}>YOUR BALANCE</p>
      <p className={s.text}>₴ {formattedBalance}</p>
    </div>
  );
}

export default Balance;
