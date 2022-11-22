import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
