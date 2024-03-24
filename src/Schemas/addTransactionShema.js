import * as yup from 'yup';

// export const addTransactionShema =  yup.object().shape({
//         type: yup.string(),
//         category: yup.string().when('EXPENSE', (type, schema)=> {
//     if (type === 'EXPENSE') 
//         return schema.required('Category is required for expenses')
//         return schema
//     })
//     }).shape({
//     amount: yup
//       .number()
//       .typeError('Amount must be a number')
//       .required('Please enter the amount')
//       .when('type', {
//         is: 'EXPENSE',
//         then: yup.number().negative('The amount must be negative'),
//         otherwise: yup.number().positive('The amount must be positive'),
//       }),
//       comment: yup
//         .string()
//         .required(`Describe your transaction`)
//           .min(5, 'Give more details'),
//       transactionDate: yup.date().required('Please choose the date')
//   })





//   .object({
//     comment: yup
//       .string()
//       .required(`Describe your transaction`)
//       .min(5, 'Give more details'),
//     transactionDate: yup.date().required('Please choose the date'),
    // category: yup.string().required()
    // category: yup.string().when('EXPENSE', {
    //     is: true,
    //     then: (schema)=>schema.required('Category is required for expenses'),
    //     otherwise:(schema)=>schema.notRequired()
    // }),
//     type: yup.string().oneOf(['INCOME', 'EXPENSE']).required(),
//     category: yup.string().when('type', {
//       is: 'EXPENSE',
//       then: yup.string().required('Category is required for expenses'),
//       otherwise: yup.string().notRequired(),
//     }),
//   })
//   .shape({
//     amount: yup
//       .number()
//       .typeError('Amount must be a number')
//       .required('Please enter the amount')
//       .when('type', {
//         is: 'EXPENSE',
//         then: yup.number().negative('The amount must be negative'),
//         otherwise: yup.number().positive('The amount must be positive'),
//       }),
//   })
//   .required();

export const addTransactionShema = yup.object({
  comment: yup
    .string()
    .required(`Describe your transaction`)
    .min(5, 'Give more details'),
  transactionDate: yup.date().required('Please choose the date'),
  amount: yup
    .number()
    .typeError('Please enter the number')
    .min(1, 'Number must be at least 1 character')
    .required('Sum is required'),
});