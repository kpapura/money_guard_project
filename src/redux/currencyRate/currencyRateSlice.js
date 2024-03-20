import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencyRate } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { currencyRate: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyRate.fulfilled, (state, action) => {
      state.currencyRate = action.payload;
    });
  },
});

export default currencySlice.reducer;