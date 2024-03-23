import React from 'react';
import { Form } from '../Form';
import { editTransactionThunk } from '../../../redux/transactions/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function EditTransactionForm({ categories, editContent, toggle }) {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(editTransactionThunk({ content:{...data}, id:editContent.id }))
      .unwrap()
      .then(data => {
        toast.success(`Changed!`);
        toggle()
      })
      .catch(err => {
        toast.error('Credentials is not valid!');
      });
  };

  return (
    <Form
      toggle={toggle}
      content={editContent.content}
      categories={categories}
      onDataSubmit={handleSubmit}
      typeForm="edit"
    />
  );
}
