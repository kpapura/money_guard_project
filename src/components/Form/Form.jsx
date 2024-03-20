import React, { useState } from 'react';
import { useModal } from '../../hooks/useModal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import TransactionSwitcher from './TransactionSwitcher/TransactionSwitcher';
import s from './Form.module.css';

export function Form({ closeModal, typeForm }) {
  const { toggle, close } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();
  const [type, setType] = useState('Expense');

  const [startDate, setStartDate] = useState(new Date());

  const submit = () => {
    const data = getValues();
    toggle();
    reset();
  };

  const toggleTransaction = () => {
    const newType = type === 'Expense' ? 'Income' : 'Expense';
    setType(newType);
  };

  return (
    <div>
      <form className={s.formWrapper} onSubmit={handleSubmit(submit)}>
        <h1 className={s.header}>
          {typeForm === 'add' ? 'Add transaction' : 'Edit transaction'}
        </h1>
        {typeForm === 'add' ? (
          <TransactionSwitcher onChange={toggleTransaction} />
        ) : (
          <div>
            <ul className={s.checkBox} onClick={toggleTransaction}>
              <li>Income</li>
              <span>/</span>
              <li>Expense</li>
            </ul>
          </div>
        )}
        <div>
          {type === 'Expense' && (
            <select
              className={s.selectExpense}
              {...register('category')}
              errors={errors}
              placeholder="Select a category"
              name="category"
            >
              <option value="main-expenses">Main expenses</option>
              <option value="products">Products</option>
              <option value="car">Car</option>
              <option value="self-care">Self Care</option>
              <option value="child-care">Child Care</option>
              <option value="household-products">Household products</option>
              <option value="education">Education</option>
              <option value="leisure">Leisure</option>
              <option value="other-expenses">Other expenses</option>
              <option value="entertainment">Entertainment</option>
            </select>
          )}

          <div className={s.boxDate}>
            <input
              className={s.incomeInput}
              {...register('income')}
              errors={errors}
              placeholder="0.00"
              name="income"
            />
            <DatePicker
              className={s.customInput}
              selected={startDate}
              onChange={date => {
                setValue('date', date);
                setStartDate(date);
              }}
            />
          </div>
          <input
            className={s.comment}
            {...register('comment')}
            errors={errors}
            placeholder="Comment"
            name="comment"
          />
          <div className={s.btnBox}>
            <button className={s.btn}>
              {typeForm === 'add' ? 'ADD' : 'EDIT'}
            </button>
            <button className={s.btn} onClick={closeModal}>
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
