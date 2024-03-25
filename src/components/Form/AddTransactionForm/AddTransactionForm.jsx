import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Form } from '../Form';
import { addTransactionThunk } from '../../../redux/transactions/operations';
import { addTransactionShema } from '../../../Schemas/addTransactionShema';

import 'react-toastify/dist/ReactToastify.css';

export function AddTransactionForm({ categories, toggle }) {
  const dispatch = useDispatch()
  
  const handleSubmit = data => {
    dispatch(addTransactionThunk(data)).unwrap()
      .then(() => {
        toast.success("Transaction was successfully added")   
        toggle()
      }) .catch(err => {
        toast.error('Credentials is not valid!');
      });
  }
  return (
<Form schema={addTransactionShema}  categories={categories} onDataSubmit={handleSubmit} toggle={toggle} typeForm="add"/>
  );
}

