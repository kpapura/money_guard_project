import * as yup from 'yup';

export const addTransactionShema = yup
  .object({
    comment: yup
      .string()
      .required(`Describe your transaction`)
      .min(5, 'Give more details'),
    transactionDate: yup.date().required('Please choose the date'),
    // category: yup.string().required()
    // category: yup.string().when('EXPENSE', {
    //     is: true,
    //     then: (schema)=>schema.required('Category is required for expenses'),
    //     otherwise:(schema)=>schema.notRequired()
    // }),
    type: yup.string().oneOf(['INCOME', 'EXPENSE']).required(),
    category: yup.string().when('type', {
      is: 'EXPENSE',
      then: yup.string().required('Category is required for expenses'),
      otherwise: yup.string().notRequired(),
    }),
  })
  .shape({
    amount: yup
      .number()
      .typeError('Amount must be a number')
      .required('Please enter the amount')
      .when('type', {
        is: 'EXPENSE',
        then: yup.number().negative('The amount must be negative'),
        otherwise: yup.number().positive('The amount must be positive'),
      }),
  })
  .required();
