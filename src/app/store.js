import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from '../features/bookings/bookingsReducer';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
});
