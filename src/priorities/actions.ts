import { createAsyncThunk } from "@reduxjs/toolkit";

// utils
import { request } from "lib/api";

// types
import { Maybe, ThunkAPI } from "models/types";
import { Priority } from "./redusers";

interface AddPriority {
  title: string;
  color: string;
  priority: number;
}

export const getPriorities = createAsyncThunk<
  Priority[],
  Maybe<undefined>,
  ThunkAPI
>("priorities/getPriorities", async (_, { rejectWithValue }) => {
  try {
    const resp = await request("/api/priorities");

    return resp.json();
  } catch (error: any) {
    console.error(error);
    return rejectWithValue(error);
  }
});

export const addPriorities = createAsyncThunk<Priority, AddPriority, ThunkAPI>(
  "priorities/addPriorities",
  async (priority, { rejectWithValue }) => {
    try {
      const resp = await request("/api/priorities", {
        method: "POST",
        body: JSON.stringify(priority),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return resp.json();
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);
