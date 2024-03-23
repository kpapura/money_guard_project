import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchTransactionCategoriesThunk,
  fetchTransactionsDataThunk,
} from '../../redux/transactions/operations';
import TransactionsList from '../../components/Transactions/TransactionsList';

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
