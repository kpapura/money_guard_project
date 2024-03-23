import React, { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import TransactionSwitcher from './TransactionSwitcher/TransactionSwitcher';
import s from './Form.module.css';
import { formatDate } from '../../helpers/addLeadingzero';
import Select from 'react-select';
import FormInput from './FormFields/FormFields';
//import { yupResolver } from '@hookform/resolvers/yup';
import { useDashboard } from '../../hooks/useDashboard';

export function Form({
  content,
  categories,
  toggle,
  typeForm,
  onDataSubmit,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [selectedOption, setSelectedOption] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    content ? setType(content.type) : setType('EXPENSE');
  }, [content]);

  useEffect(() => {
    setValue('amount', content && content.amount);
  }, [content, setValue]);

  useEffect(() => {
    setValue('comment', content && content.comment);
  }, [content, setValue]);

  const categoriesValues = useMemo(() => {
    return categories.map(({ id, name }) => {
      return { value: id, label: name };
    });
  }, [categories]);

  const defaultValue = useMemo(() => {
    return categoriesValues.find(option => {
      return content?.categoryId === option.value;
    });
  }, [content, categoriesValues]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };
  const submit = data => {
    if (typeForm === 'add') {
      onDataSubmit({
        transactionDate: formatDate(startDate),
        amount: +data.amount,
        comment: data.comment,
        type: type,
        categoryId:
          type === 'EXPENSE'
            ? selectedOption.value || categoriesValues[0].value
            : '063f1132-ba5d-42b4-951d-44011ca46262',
      });
    } else {
      onDataSubmit({
        transactionDate: formatDate(startDate),
        amount: +data.amount,
        comment: data.comment,
      });
    }
  };
  const toggleTransaction = type => {
    if (type) {
      setType('INCOME');
    } else {
      setType('EXPENSE');
    }
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
            <ul className={s.checkBox}>
              <li
                onClick={() => {
                  if (!(typeForm === 'edit' && type === 'EXPENSE')) {
                    toggleTransaction(true);
                  }
                }}
                className={
                  content.type === 'INCOME' || type === 'INCOME'
                    ? s.activeIncome
                    : ''
                }
                disabled={typeForm === 'edit' && type === 'EXPENSE'}
              >
                {' '}
                Income
              </li>
              <span>/</span>
              <li
                onClick={() => {
                  if (!(typeForm === 'edit' && type === 'INCOME')) {
                    toggleTransaction(false);
                  }
                }}
                className={type === 'EXPENSE' ? s.activeExpense : ''}
                disabled={typeForm === 'edit' && type === 'INCOME'}
              >
                {' '}
                Expense{' '}
              </li>
            </ul>
          </div>
        )}
        <div>
          {type === 'EXPENSE' && (
            <div className={s.inputContainer}>
              <Select
                name="category"
                //className={s.selectExpense}
                options={categoriesValues}
                defaultValue={defaultValue ? defaultValue : categoriesValues[0]}
                onChange={handleChange}
                isDisabled={typeForm === 'edit'}
              />
            {errors['category'] && <span>{errors['category'].message}</span>}
            </div>
          )}

          <div className={s.boxDate}>
            <FormInput
              className={s.incomeInput}
              name="amount"
              placeholder="0.00"
              errors={errors}
              register={register}
            />

            <div className={s.inputContainer}>
              <DatePicker
                className={s.customInput}
                selected={content ? content.transactionDate : startDate}
                onChange={date => {
                  setValue('transactionDate', date);
                  setStartDate(date);
                }}
              />
              {errors['transactionDate'] && (
                <span>{errors['transactionDate'].message}</span>
              )}
            </div>
          </div>
          
          <FormInput
            className={s.comment}
            name="comment"
            placeholder="Comment"
            errors={errors}
            register={register}
          />

          <div className={s.btnBox}>
            <button className={s.btn}>
              {typeForm === 'add' ? 'ADD' : 'EDIT'}
            </button>
            <button type="button" onClick={toggle} className={s.btn}>
              CANCEL
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}