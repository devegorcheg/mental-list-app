// types
import { rootReducer, store } from "store";
import { AccountsPassword, AccountsClient } from "lib/accounts";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export type Maybe<T> = T | null;

export type ThunkAPI = {
  state: RootState;
  dispatch: AppDispatch;
  extra: {
    accountsPassword: AccountsPassword;
    accountsClient: AccountsClient;
  };
  rejectValue: string;
};
