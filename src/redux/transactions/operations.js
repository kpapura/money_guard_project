import { createAsyncThunk } from '@reduxjs/toolkit';

import { walletApi } from '../../axiosConfig/walletApi';

export const fetchTransactionsDataThunk = createAsyncThunk(
  'fetchTransactionsData',
  async (_, thunkAPI) => {
    try {
      const { data } = await walletApi.get('transactions');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async (id, thunkAPI) => {
    try {
      const { data } = await walletApi.delete(`transactions/${id}`);
      console.log(data);

      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  'addTransaction',
  async (body, thunkAPI) => {
    try {
      const { data } = await walletApi.post('transactions', body);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTransactionThunk = createAsyncThunk(
  'editTransaction',
  async (body, thunkAPI) => {
    try {
      const { data } = await walletApi.patch(`/transactions/${body.id}`, body);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
