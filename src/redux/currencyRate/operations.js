// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchCurrencyRate = createAsyncThunk('currency/fetchCurrencyRate', async (_, thunkAPI) => {
//   // const savedData = localStorage.getItem('currencyRate');
//   // const savedTime = localStorage.getItem('lastFetchTime');

//   // if (savedData && savedTime) {
//   //   const currentTime = new Date().getTime();
//   //   const timeDifference = (currentTime - savedTime) / (1000 * 60 * 60);

//   //   if (timeDifference < 1) {
//   //     return JSON.parse(savedData);
//   //   }
//   // }

//   try {
//     const response = await axios.get('https://api.monobank.ua/bank/currency');

//     // localStorage.setItem('currencyRate', JSON.stringify(response.data));
//     // localStorage.setItem('lastFetchTime', new Date().getTime().toString());
// console.log(response)
//     return response.data;
//   } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//   }
// });












import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrencyRate = createAsyncThunk('currency/fetchCurrencyRate', async () => {
  const savedData = localStorage.getItem('currencyRate');
  const savedTime = localStorage.getItem('lastFetchTime');

  if (savedData && savedTime) {
    const currentTime = new Date().getTime();
    const timeDifference = (currentTime - savedTime) / (1000 * 60 * 60);

    if (timeDifference < 1) {
      return JSON.parse(savedData);
    }
  }

  try {
    const response = await axios.get('https://api.monobank.ua/bank/currency');

    localStorage.setItem('currencyRate', JSON.stringify(response.data));
    localStorage.setItem('lastFetchTime', new Date().getTime().toString());

    return response.data;
  } catch (error) {
    console.error('Помилка при виконанні запиту до API Monobank:', error);
  }
});