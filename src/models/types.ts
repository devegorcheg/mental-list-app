// types
import { IAppDispatch } from "store";
import { IAccountsPassword, IAccountsClient } from "lib/accounts";

export type Maybe<T> = T | null;

export type ThunkAPI = {
  dispatch: IAppDispatch;
  extra: {
    accountsPassword: IAccountsPassword;
    accountsClient: IAccountsClient;
  };
  rejectValue: string;
};
