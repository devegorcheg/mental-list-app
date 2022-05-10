import { createSlice } from "@reduxjs/toolkit";

// actions
import { addTask, getTasks } from "./actions";

export interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
  owner: string;
  dueDate: string;
  done: boolean;
}

const initialState: Task[] = [];

export const tasksReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // addTask
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    });
    builder.addCase(addTask.rejected, (_, action) => {
      console.error(action?.payload ?? action.error.message ?? "Error");
    });

    // get tasks
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    });
    builder.addCase(getTasks.rejected, (_, action) => {
      console.error(action?.payload ?? action.error.message ?? "Error");
    });
  },
});
