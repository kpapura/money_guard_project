import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import { fetchCurrencyRate } from '../redux/currencyRate/operations';
import CurrencyRates from './CurrencyRates/CurrenceRate';
import TransactionsList from './Transactions/TransactionsList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencyRate());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Мій додаток</h1>
      {/* <CurrencyRates /> */}
      <TransactionsList />
    </div>
  );
}

export default App;
