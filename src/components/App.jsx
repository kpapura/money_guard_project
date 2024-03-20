import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrencyRate } from '../redux/currencyRate/operations';
import CurrencyRates from './CurrencyRates/CurrenceRate';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencyRate());
  }, [dispatch]);

  return (
    <div>
      <h1>Мій додаток</h1>
      <CurrencyRates />
    </div>
  );
}

export default App;
