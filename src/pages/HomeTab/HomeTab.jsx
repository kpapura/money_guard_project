import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchTransactionCategoriesThunk,
  fetchTransactionsDataThunk,
} from '../../redux/transactions/operations';
import useResize from '../../hooks/useResize';
import CurrenceRates from '../CurrencyRate/CurrencyRate';

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
    {screenWidth >= 768 && <CurrenceRates/>}
    <TransactionsList />
    </>
  );
};

export default HomeTab;
