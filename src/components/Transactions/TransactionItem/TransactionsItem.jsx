import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDashboard } from '../../../hooks/useDashboard';
import { deleteTransactionThunk } from '../../../redux/transactions/operations';
import { selectTransactionCategories } from '../../../redux/transactions/transactionsSlice';

import sprite from '../../../img/sprite.svg';
import s from './TransactionsItem.module.css';

const TransactionsItem = ({ transaction, handleEditItem }) => {
  const { id, transactionDate, type, categoryId, comment, amount } =
    transaction;

  const { isBigScreenOrTablet, isMobile } = useDashboard();

  const dispatch = useDispatch();
  const categories = useSelector(selectTransactionCategories);

  function getCategoryName(id) {
    const category = categories.find(category => category.id === id);
    return category ? category.name : 'Unknown Category';
  }

  const handleDeleteTransaction = () => {
    dispatch(deleteTransactionThunk(transaction));
  };

  const signType = type.toLowerCase() === 'income' ? '+' : '-';

  const transactionBorderColor =
    type.toLowerCase() === 'income' ? s.income_border : s.expense_border;

  const transactionTextColor =
    type.toLowerCase() === 'income' ? s.income_text : s.expense_text;
  
  const formattedAmount = amount.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <>
      {isMobile && (
        <li
          key={id}
          className={`${s.transaction_item} ${transactionBorderColor}`}
        >
          <table className={s.transactions_table_mobile}>
            <tbody className={s.table_body}>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Date</td>
                <td>{transactionDate}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Type</td>
                <td>{signType}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Category</td>
                <td>{getCategoryName(categoryId)}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Comment</td>
                <td>{comment}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td className={s.transaction_first_column}>Sum</td>
                <td className={transactionTextColor}>{formattedAmount}</td>
              </tr>
              <tr className={s.transaction_row_mobile}>
                <td>
                  <button
                    className={s.btn_delete}
                    onClick={handleDeleteTransaction}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleEditItem(
                        { categoryId, type, amount, comment, transactionDate },
                        id
                      )
                    }
                    className={s.btn_edit}
                  >
                    <svg className={s.icon_edit}>
                      <use xlinkHref={`${sprite}#icon-edit`} />
                    </svg>{' '}
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      )}
      {isBigScreenOrTablet && (
        <tr className={s.transaction_row}>
          <td className={s.transaction_colum}>{transactionDate}</td>
          <td className={s.transaction_colum} style={{ textAlign: 'center' }}>
            {signType}
          </td>
          <td className={s.transaction_colum}>{getCategoryName(categoryId)}</td>
          <td className={s.transaction_colum}>{comment}</td>
          <td
            className={`${s.transaction_colum} ${transactionTextColor}`}
            style={{ textAlign: 'right' }}
          >
            {formattedAmount}
          </td>
          <td className={s.transaction_colum}>
            <div className={s.btn_wrapper}>
              <button
                onClick={() =>
                  handleEditItem(
                    { categoryId, type, amount, comment, transactionDate },
                    id
                  )
                }
                className={s.btn_edit}
              >
                <svg className={s.icon_edit}>
                  <use xlinkHref={`${sprite}#icon-edit`} />
                </svg>
              </button>
              <button
                className={s.btn_delete}
                onClick={handleDeleteTransaction}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TransactionsItem;
