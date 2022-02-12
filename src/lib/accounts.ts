import { AccountsClient } from "@accounts/client";
import { AccountsClientPassword } from "@accounts/client-password";
import { RestClient } from "@accounts/rest-client";

const accountsRest = new RestClient({
  apiHost: "http://localhost:3001",
  rootPath: "/api",
});

export const accountsClient = new AccountsClient({}, accountsRest);
export const accountsPassword = new AccountsClientPassword(accountsClient);

export type IAccountsPassword = typeof accountsPassword;
export type IAccountsClient = typeof accountsClient;
