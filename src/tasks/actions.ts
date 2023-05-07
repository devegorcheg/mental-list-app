import { createAsyncThunk } from "@reduxjs/toolkit";

// utils
import { request } from "lib/api";
import { tasksReducer, Sort, Task } from "./redusers";

// types
import { Maybe, ThunkAPI } from "models/types";

interface AddTask {
  title: string;
  priority: string;
  dueDate: Date;
}

export const addTask = createAsyncThunk<Task, AddTask, ThunkAPI>(
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

interface Variables {
  sort: Sort;
  filter: Maybe<string>;
}

export const getTasks = createAsyncThunk<Task[], Variables, ThunkAPI>(
  "tasks/getTasks",
  async (variables, { rejectWithValue }) => {
    const params = new URLSearchParams({
      sort: variables.sort,
    });

    if (variables?.filter) {
      params.append("filter", variables!.filter);
    }

    try {
      const resp = await request(`/api/tasks?${params.toString()}`);

      return resp.json();
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

export const { setFilter, setSort } = tasksReducer.actions;
