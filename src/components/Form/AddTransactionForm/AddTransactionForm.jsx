import React from 'react';
import { Form } from '../Form';
import { useDispatch } from 'react-redux';
import { addTransactionThunk } from '../../../redux/transactions/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AddTransactionForm({ categories, onCancelClose }) {
  const dispatch = useDispatch()
  
  const handleSubmit = data => {
    dispatch(addTransactionThunk(data)).unwrap()
      .then(() => {
        toast.success("Transaction was successfully added")
      })
    reset()
  }
  return (
<Form categories={categories} onDataSubmit={handleSubmit} closeModal={onCancelClose} typeForm="add"/>
  );
}
