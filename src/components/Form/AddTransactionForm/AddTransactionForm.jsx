import React from 'react';
import { Form } from '../Form';
import { useDispatch } from 'react-redux';
import { addTransactionThunk } from '../../../redux/transactions/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { addTransactionShema } from '../../../Schemas/addTransactionShema';

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
<Form categories={categories} onDataSubmit={handleSubmit} toggle={toggle} typeForm="add"/>
  );
}

// schema={addTransactionShema} 