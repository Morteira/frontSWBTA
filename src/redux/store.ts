import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import paginationReducer from './paginationSlice';
import userReducer from './userSlice';

// Configuración del store
export const store = configureStore({
  reducer: {
    auth: tokenReducer,
    pagination: paginationReducer,
    user: userReducer,
  },
});

// Definir RootState y AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
