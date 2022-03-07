import { createSlice } from "@reduxjs/toolkit";

// actions
import { signup, login, logout, getUser } from "./actions";

// types
import { Maybe } from "models/types";
import { User } from "@accounts/types";

interface InitialState {
  loading: boolean;
  error: Maybe<string>;
  loggedUser: Maybe<User>;
}

const initialState: InitialState = {
  loading: true,
  error: null,
  loggedUser: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // signup
    builder.addCase(signup.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action?.payload ?? action.error.message ?? "Ошибка регистрации";
    });

    // login
    builder.addCase(login.pending, state => {
      state.loading = true;
      state.error = null;
      state.loggedUser = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedUser = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action?.payload ?? action.error.message ?? "Ошибка авторизации";
    });

    // getUser
    builder.addCase(getUser.pending, state => {
      state.loading = true;
      state.error = null;
      state.loggedUser = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedUser = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action?.payload ?? action.error.message ?? "Ошибка авторизации";
    });

    // loguot
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loggedUser = action.payload;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action?.payload ?? action.error.message ?? "Неизвестная ошибка";
      console.log(action);
    });
  },
});
