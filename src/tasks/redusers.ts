import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// actions
import { addTask, getTasks } from "./actions";

// types
import { RootState } from "store";

export interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
  owner: string;
  dueDate: string;
  done: boolean;
}

const tasksAdapter = createEntityAdapter<Task>({ selectId: ({ _id }) => _id });

const initialState = tasksAdapter.getInitialState();

export const tasksReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // addTask
    builder.addCase(addTask.fulfilled, tasksAdapter.addMany);
    builder.addCase(addTask.rejected, (_, action) => {
      console.error(action?.payload ?? action.error.message ?? "Error");
    });
    // get tasks
    builder.addCase(getTasks.fulfilled, (state, action) => {
      tasksAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(getTasks.rejected, (_, action) => {
      console.error(action?.payload ?? action.error.message ?? "Error");
    });
  },
});

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = tasksAdapter.getSelectors<RootState>(state => state.tasks);
