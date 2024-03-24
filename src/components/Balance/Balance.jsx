import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/auth/authSlice'; 
import s from './Balance.module.css'

function Balance() {
  const balance = useSelector(selectBalance);

  return (
      <div className={s.wrapper}>
          <p className={s.title}>YOUR BALANCE</p>
          <p className={s.text}>₴ {balance}</p>
       </div>
  );
}

export default Balance;

