// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import {currencyReducer} from './currencyRate/currencyRateSlice';

// import { authReducer } from './auth/authSlice';
// import { transactionsReducer } from './transactions/transactionsSlice';

// const persistConfig = {
//   key: ['auth','root'],
//   version: 1,
//   storage,
//   whitelist: ['token', 'lastFetchTime'],
// };



// export const store = configureStore({
//   reducer: {
//     auth:  persistReducer(persistConfig, authReducer),
//     transactions: transactionsReducer,
// currency:  persistReducer(persistConfig, currencyReducer)
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),

//   devTools: process.env.NODE_ENV !== 'production',
// });

// export const persistor = persistStore(store);







import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/authSlice';
import { transactionsReducer } from './transactions/transactionsSlice';
import currencyReducer from '../redux/currencyRate/currencyRateSlice';

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCurrencyReducer = persistReducer(currencyPersistConfig, currencyReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: transactionsReducer,
    currency: persistedCurrencyReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);








