import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactionsDataThunk } from '../../redux/transactions/operations';

import TransactionsList from '../../components/Transactions/TransactionsList';
import CurrencyRates from '../../components/CurrencyRates/CurrenceRate';

const HomeTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsDataThunk());
  }, [dispatch]);

  return (
    <>
      <TransactionsList />
    </>
  );
};

export default HomeTab;
