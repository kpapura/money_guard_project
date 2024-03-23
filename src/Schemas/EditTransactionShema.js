import * as yup from 'yup'

export const editTransactionShema = yup.object({
    comment: yup.string(),
    transactionDate: yup.date(),
    amount: yup.number('The amount must be positive')
    })