import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TransactionsList from '../../components/Transactions/TransactionsList';
import {
  fetchTransactionCategoriesThunk,
  fetchTransactionsDataThunk,
} from '../../redux/transactions/operations';

const HomeTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsDataThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTransactionCategoriesThunk());
  }, [dispatch]);

  return <TransactionsList />;
};

export default HomeTab;
