import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addTransactionThunk,
  deleteTransactionThunk,
  editTransactionThunk,
  fetchTransactionsDataThunk,
} from './operations';

const initialState = {
  transactionsList: [],
  loading: false,
  error: false,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  selectors: {
    selectTransactions: state => state.transactionsList,
    selectIsLoading: state => state.loading,
    selectIsError: state => state.error,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTransactionsDataThunk.fulfilled, (state, { payload }) => {
        state.transactionsList = payload;
        state.loading = false;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactionsList = state.transactionsList.filter(
          transaction => transaction.id !== payload
        );
        state.loading = false;
      })
      .addCase(addTransactionThunk.fulfilled, (state, { payload }) => {
        state.transactionsList.push(payload);
        state.loading = false;
      })
      .addCase(editTransactionThunk.fulfilled, (state, { payload }) => {
        const transactionIndex = state.transactionsList.findIndex(
          transaction => transaction.id === payload.id
        );
        state.transactionsList.splice(transactionIndex, 1, payload);
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchTransactionsDataThunk.pending,
          deleteTransactionThunk.pending,
          addTransactionThunk.pending,
          editTransactionThunk.pending
        ),
        (state, { payload }) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactionsDataThunk.rejected,
          deleteTransactionThunk.rejected,
          addTransactionThunk.rejected,
          editTransactionThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.loading = false;
        }
      );
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { selectTransactions, selectIsLoading, selectIsError } =
  transactionsSlice.selectors;
