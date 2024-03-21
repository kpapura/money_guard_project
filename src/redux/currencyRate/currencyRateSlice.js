// import { createSlice } from '@reduxjs/toolkit';
// import { fetchCurrencyRate } from './operations';
// const initialState = {
//   usdRate: null,
//   eurRate: null,
//   // lastFetchTime: null,
// }
// const currencySlice = createSlice({
//   name: 'currency',
//   initialState,
//   reducers: {},
//   selectors: {
//     selectUsdRate: state => state.usdRate,
//     selectEurRate: state => state.eurRate,
//     // selectLastFetchTime: state => state.lastFetchTime,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchCurrencyRate.fulfilled, (state, {payload}) => {
//       state.usdRate = payload.find(rate => rate.currencyCodeA === 840 && rate.currencyCodeB === 980);
//       state.eurRate = payload.find(rate => rate.currencyCodeA === 978 && rate.currencyCodeB === 980);
//       // state.lastFetchTime = new Date().getTime().toString();
//     });
//   },
// });

// export const currencyReducer = currencySlice.reducer;
// export const { selectUsdRate, selectEurRate, selectLastFetchTime } = currencySlice.selectors;










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