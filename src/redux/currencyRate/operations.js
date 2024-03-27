import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchCurrencyRate = createAsyncThunk(
  'currency/fetchCurrencyRate',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('https://api.monobank.ua/bank/currency');
      return response.data;
    } catch (error) {
      toast.error('Помилка при виконанні запиту до Monobank:', error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
