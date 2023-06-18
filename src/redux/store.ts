import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './slice';
import { formApi } from './api';

export const store = configureStore({
  reducer: {
    formData: formSlice.reducer,
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(formApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
