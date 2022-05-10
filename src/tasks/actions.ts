import { createAsyncThunk } from "@reduxjs/toolkit";

// utils
import { request } from "lib/api";

// types
import { Maybe, ThunkAPI } from "models/types";
import { Task } from "./redusers";

interface AddTask {
  title: string;
  priority: string;
  dueDate: Date;
}

export const addTask = createAsyncThunk<Task[], AddTask, ThunkAPI>(
  "tasks/addTask",
  async (task, { rejectWithValue }) => {
    try {
      const resp = await request("/api/tasks", {
        method: "POST",
        body: JSON.stringify(task),
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

export const getTasks = createAsyncThunk<Task[], Maybe<undefined>, ThunkAPI>(
  "tasks/getTasks",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await request("/api/tasks");

      return resp.json();
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);
