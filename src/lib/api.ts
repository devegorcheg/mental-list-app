import { set } from "lodash";

import { accountsClient } from "./accounts";

export const request = async (url: string, options = {} as RequestInit) => {
  const tokens = await accountsClient.refreshSession();

  if (tokens) {
    set(options, "headers.Authorization", `Bearer ${tokens.accessToken}`);
  }

  return fetch(url, options);
};
