import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  fetchTransactionsDataThunk,
  fetchTransactionCategoriesThunk,
} from '../../redux/transactions/operations';
import {
  selectTransactionCategories,
  selectTransactions,
} from '../../redux/transactions/transactionsSlice';
import TransactionsItem from './TransactionItem/TransactionsItem.jsx';
import s from './TransactionList.module.css';
import { useModal } from '../../hooks/useModal.jsx';
import Modal from '../Modal/Modal.jsx';
import { EditTransactionForm } from '../Form/EditTransactionForm/EditTransactionForm.jsx';
import { AddTransactionForm } from '../Form/AddTransactionForm/AddTransactionForm.jsx';
import sprite from '../../img/sprite.svg';
import { useDashboard } from '../../hooks/useDashboard';

const TransactionsList = () => {
  const { isOpen, toggle } = useModal();
  const [editContent, setEditContent] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionsDataThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTransactionCategoriesThunk());
  }, [dispatch]);

  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);

  const { isBigScreenOrTablet, isMobile } = useDashboard();

  const handleEditItem = (content, id, name) => {
    toggle();
    setEditContent({ content, id, name });
  };
  const handleAddItem = () => {
    toggle();
    setEditContent(null);
  };
  return (
    <section className={s.transactions_section}>
      <div className={s.transactions_container}>
        {isMobile && (
          <ul className={s.transactions_list}>
            {transactions.length > 0 ? (
              transactions.map(transaction => (
                <TransactionsItem
                  handleEditItem={handleEditItem}
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
          <>
            {transactions.length > 0 ? (
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
                <tbody className={s.table_body}>
                  {transactions.map(transaction => (
                    <TransactionsItem
                     handleEditItem={handleEditItem}
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <>
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
                </table>
                <div className={s.empty_transactions}>No transactions</div>
              </>
            )}
          </>
        )}

        <button onClick={()=>handleAddItem()} className={s.btn_add}>
          {' '}
          <svg className={s.icon_plus}>
            <use xlinkHref={`${sprite}#icon-plus`} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          {editContent ? (
            <EditTransactionForm
              editContent={editContent}
              categories={categories}
              toggle={toggle}
            />
          ) : (
            <AddTransactionForm categories={categories} toggle={toggle} />
          )}
        </Modal>
      )}
    </section>
  );
};

export default TransactionsList;