import React from 'react';
import { Form } from '../Form';
import { editTransactionThunk } from '../../../redux/transactions/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EditTransactionForm({ categories, content, onCancelClose }) {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    console.log({ ...content, ...data });
    dispatch(editTransactionThunk({ ...content, ...data }))
      .unwrap()
      .then(data => {
        toast.success(`Changed!`);
      })
      .catch(err => {
        toast.error('Credentials is not valid!');
      });
    // onCancelClose()
    // reset()
  };

  return (
    <Form
      categories={categories}
      onDataSubmit={handleSubmit}
      closeModal={onCancelClose}
      typeForm="edit"
    />
  );
}
