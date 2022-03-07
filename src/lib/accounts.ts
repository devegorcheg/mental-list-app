import { AccountsClient as Accounts } from "@accounts/client";
import { AccountsClientPassword } from "@accounts/client-password";
import { RestClient } from "@accounts/rest-client";

const accountsRest = new RestClient({
  apiHost: "http://localhost:3001",
  rootPath: "/api",
});

export const accountsClient = new Accounts({}, accountsRest);
export const accountsPassword = new AccountsClientPassword(accountsClient);

export type AccountsPassword = typeof accountsPassword;
export type AccountsClient = typeof accountsClient;
