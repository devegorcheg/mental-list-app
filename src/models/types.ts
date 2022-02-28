// types
import { AppDispatch } from "store";
import { AccountsPassword, AccountsClient } from "lib/accounts";

export type Maybe<T> = T | null;

export type ThunkAPI = {
  dispatch: AppDispatch;
  extra: {
    accountsPassword: AccountsPassword;
    accountsClient: AccountsClient;
  };
  rejectValue: string;
};
