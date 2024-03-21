import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrencyRate = createAsyncThunk(
  'currency/fetchCurrencyRate',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://api.monobank.ua/bank/currency');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
