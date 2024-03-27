import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TransactionsList from '../../components/Transactions/TransactionsList';
import Balance from '../../components/Balance/Balance';

import { fetchTransactionsDataThunk } from '../../redux/transactions/operations';
import useResize from '../../hooks/useResize';

const HomeTab = () => {
  const dispatch = useDispatch();

  const screenWidth = useResize().windowWidth;

  useEffect(() => {
    dispatch(fetchTransactionsDataThunk());
  }, [dispatch]);

  return (
    <>
      {screenWidth < 768 && <Balance />}
      <TransactionsList />
    </>
  );
};

export default HomeTab;
