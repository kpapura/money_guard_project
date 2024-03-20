import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { loginThunk } from '../../redux/auth/operations';
import {
  fetchTransactionsDataThunk,
  fetchTransactionCategoriesThunk,
} from '../../redux/transactions/operations';
import { selectTransactions } from '../../redux/transactions/transactionsSlice';
import TransactionsItem from './TransactionItem/TransactionsItem.jsx';
import s from './TransactionList.module.css';

const TransactionsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsDataThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTransactionCategoriesThunk());
  }, [dispatch]);

  const transactions = useSelector(selectTransactions);
  const isBigScreenOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section className={s.transactions_section}>
      <div className={s.transactions_container}>
        <button
          onClick={() =>
            dispatch(
              loginThunk({
                email: 'test099@gmail.com',
                password: 'qwerty',
              })
            )
          }
        >
          Login
        </button>
        {isMobile && (
          <ul className={s.transactions_list}>
            {transactions.map(transaction => (
              <TransactionsItem
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </ul>
        )}
        {isBigScreenOrTablet && (
          <table className={s.transactions_table}>
            <thead>
              <tr className={s.transaction_row_head}>
                <th>Date</th>
                <th style={{ textAlign: 'center' }}>Type</th>
                <th>Category</th>
                <th>Comment</th>
                <th style={{ textAlign: 'right' }}>Sum</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <TransactionsItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </tbody>
          </table>
        )}
        <button className={s.btn_add}>+</button>
      </div>
    </section>
  );
};

export default TransactionsList;
