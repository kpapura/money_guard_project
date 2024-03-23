import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchTransactionCategoriesThunk,
  fetchTransactionsDataThunk,
} from '../../redux/transactions/operations';
import useResize from '../../hooks/useResize';
import TransactionsList from '../../components/Transactions/TransactionsList';
import CurrencyRates from '../../components/CurrencyRates/CurrenceRate';

const HomeTab = () => {
  const screenWidth = useResize().windowWidth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsDataThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTransactionCategoriesThunk());
  }, [dispatch]);

  return (
    <>
    {screenWidth >= 768 && <CurrencyRates/>}
    <TransactionsList />
    </>
  );
};

export default HomeTab;
