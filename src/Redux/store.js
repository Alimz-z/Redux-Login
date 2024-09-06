import { configureStore } from '@reduxjs/toolkit';
import loginSlicer from './loginSlicer';

export const store = configureStore({
  reducer: {
    login: loginSlicer, 
  },
});
