import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

// types
import { Maybe, ThunkAPI } from "models/types";
import { Priority, Sort } from "./redusers";

export const getPriorities = createAsyncThunk<
  Priority[],
  Maybe<undefined>,
  ThunkAPI
>(
  "priorities/getPriorities",
  async (_, { extra: { accountsClient }, rejectWithValue }) => {
    try {
      const tokens = await accountsClient.getTokens();

      if (tokens) {
        const res = await fetch("/api/priorities", {
          headers: {
            Authorization: tokens ? "Bearer " + tokens.accessToken : "",
          },
        });
        const priorities: Priority[] = await res.json();

        return priorities;
      }

      return [];
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

export const setFilter = createAction<Maybe<string>, "priorities/setFilter">(
  "priorities/setFilter",
);

export const setSort = createAction<Sort, "priorities/setSort">(
  "priorities/setSort",
);
