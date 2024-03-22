import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectTransactions } from '../../redux/transactions/transactionsSlice';
import TransactionsItem from './TransactionItem/TransactionsItem.jsx';
import s from './TransactionList.module.css';
import sprite from '../../img/sprite.svg';

const TransactionsList = () => {
  const transactions = useSelector(selectTransactions);

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
                  <td className={s.empty_transactions}>No transactions</td>
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
