import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  fetchTransactionsDataThunk,
  fetchTransactionCategoriesThunk,
} from '../../redux/transactions/operations';
import { selectTransactions } from '../../redux/transactions/transactionsSlice';
import TransactionsItem from './TransactionItem/TransactionsItem.jsx';
import s from './TransactionList.module.css';
import sprite from '../../img/sprite.svg';

const TransactionsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsDataThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTransactionCategoriesThunk());
  }, [dispatch]);

  const transactions = useSelector(selectTransactions);

  // const transactions = [
  //   {
  //     id: '86918a01-6b46-41a0-b8a6-e76d787968a5',
  //     transactionDate: '2023-02-10',
  //     type: 'INCOME',
  //     comment: 'string',
  //     amount: 100,
  //     balanceAfter: 100,
  //     categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
  //     userId: '7d7683f7-9e7b-47b0-abab-623c9896eddd',
  //   },
  //   {
  //     id: 'aea72c63-8a08-4227-80e4-123f3ca7228b',
  //     transactionDate: '2023-07-10',
  //     type: 'EXPENSE',
  //     comment: 'string',
  //     amount: -50,
  //     balanceAfter: 50,
  //     categoryId: 'c9d9e447-1b83-4238-8712-edc77b18b739',
  //     userId: '7d7683f7-9e7b-47b0-abab-623c9896eddd',
  //   },
  // ];

  const isBigScreenOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section className={s.transactions_section}>
      <div className={s.transactions_container}>
        {isMobile && (
          <ul className={s.transactions_list}>
            {transactions.length > 0 ? (
              transactions.map(transaction => (
                <TransactionsItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))
            ) : (
              <div className={s.empty_transactions}>No transactions</div>
            )}
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
              {transactions.length > 0 ? (
                transactions.map(transaction => (
                  <TransactionsItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="6" className={s.empty_transactions}>
                    No transactions
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
        <button className={s.btn_add}>
          {' '}
          <svg className={s.icon_plus}>
            <use xlinkHref={`${sprite}#icon-plus`} />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TransactionsList;
