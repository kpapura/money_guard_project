import React from 'react';
import { Form } from '../Form';

export function AddTransactionForm({onCancelClose}) {

  return (
<Form closeModal={onCancelClose} typeForm="add"/>
  );
}
