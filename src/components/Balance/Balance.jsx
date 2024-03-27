import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectBalance } from '../../redux/auth/authSlice';
import s from './Balance.module.css';
import { getBalanceThunk } from '../../redux/auth/operations';

function Balance() {
  const dispatch = useDispatch()
  let balance = useSelector(selectBalance);

  useEffect(() => {
  balance=dispatch(getBalanceThunk())
  },[])
  
  const formattedBalance = balance.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (
    <div className={s.wrapper}>
      <p className={s.title}>YOUR BALANCE</p>
      <p className={s.text}>₴ {formattedBalance}</p>
    </div>
  );
}

export default Balance;
