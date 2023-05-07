import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// actions
import { addPriorities, getPriorities } from "./actions";

// utils
import { isRejectedAction } from "store/utils";

// types
import { RootState } from "models/types";

export interface Priority {
  _id: string;
  title: string;
  color: string;
  priority: number;
  owner: string;
}

const priorityAdapter = createEntityAdapter<Priority>({
  selectId: ({ _id }) => _id,
  sortComparer: (a, b) => b.priority - a.priority,
});

const initialState = priorityAdapter.getInitialState();

export const prioritiesReducer = createSlice({
  name: "priorities",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // getPriorities
    builder.addCase(getPriorities.fulfilled, priorityAdapter.upsertMany);

    // addPriorities
    builder.addCase(addPriorities.fulfilled, priorityAdapter.addOne);

    // rejected
    builder.addMatcher(isRejectedAction, (_, action) => {
      console.error(action?.payload ?? action?.error?.message ?? "Error");
    });
  },
});

export const {
  selectAll: selectAllPriorities,
  selectById: selectPriorityById,
  selectIds: selectPriorityIds,
} = priorityAdapter.getSelectors<RootState>(state => state.priorities);
