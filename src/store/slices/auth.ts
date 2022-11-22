import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "interface/user";
import { RootState } from "..";

export type IStoreUser = {
  isLoggedIn: boolean;
  user: TUser | null;
  token: string | null;
};

const initialUser: IStoreUser = {
  isLoggedIn: !!localStorage.getItem("token"),
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as unknown as string)
    : null,
  token: localStorage.getItem("token") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialUser,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload?.token);
      localStorage.setItem("user", JSON.stringify(action.payload?.user));
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
      state.user = null;
    },
    update: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload?.user));
      state.user = { ...action.payload };
    },
  },
});

export const { login, logout, update } = authSlice.actions;

export const currentUser = (state: RootState) => state.auth;

export default authSlice.reducer;
