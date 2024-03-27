import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchCurrencyRate = createAsyncThunk(
  'currency/fetchCurrencyRate',
  async () => {
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
      toast.error('Помилка при виконанні запиту до Monobank:', error);
    }
  }
);
