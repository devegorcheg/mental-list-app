import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// actions
import { getTasks } from "./actions";

// utis
import { isRejectedAction } from "store/utils";

// types
import { RootState } from "models/types";
import { Maybe } from "models/types";

export interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
  owner: string;
  dueDate: string;
  done: boolean;
}

export enum Sort {
  ASC = "asc",
  DESC = "desc",
}

interface DefaultState {
  filter: Maybe<string>;
  sort: Sort;
}

const defaultState: DefaultState = {
  filter: null,
  sort: Sort.ASC,
};

const tasksAdapter = createEntityAdapter<Task>({
  selectId: ({ _id }) => _id,
});

const initialState = tasksAdapter.getInitialState(defaultState);

export const tasksReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: builder => {
    // get tasks
    builder.addCase(getTasks.fulfilled, tasksAdapter.setAll);

    // rejected
    builder.addMatcher(isRejectedAction, (_, action) => {
      console.error(action?.payload ?? action?.error?.message ?? "Error");
    });
  },
});

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = tasksAdapter.getSelectors<RootState>(state => state.tasks);
