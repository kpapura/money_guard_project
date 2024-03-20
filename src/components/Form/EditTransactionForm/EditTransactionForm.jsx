import React from 'react';
import { Form } from '../Form';

export function EditTransactionForm({onCancelClose}) {

  return (
<Form closeModal={onCancelClose} typeForm="edit"/>
  );
}
