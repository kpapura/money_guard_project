import React from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from '../../redux/auth/authSlice'; // Шлях до вашого authSlice

function Balance() {
  const balance = useSelector(selectBalance);

  return (
    <div>
      ₴ {balance}
    </div>
  );
}

export default Balance;

