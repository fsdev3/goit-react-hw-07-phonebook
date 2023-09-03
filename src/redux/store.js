import { configureStore } from '@reduxjs/toolkit';
import combinedReducer from 'redux/reducers';

export const store = configureStore({
  reducer: combinedReducer,
});
