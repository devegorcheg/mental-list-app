import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// actions
import { addPriorities, getPriorities, setFilter, setSort } from "./actions";

// types
import { Maybe } from "models/types";
import { RootState } from "store";

export interface Priority {
  _id: string;
  title: string;
  color: string;
  priority: number;
  owner: string;
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

const priorityAdapter = createEntityAdapter<Priority>({
  selectId: ({ _id }) => _id,
  sortComparer: (a, b) => b.priority - a.priority,
});

const initialState = priorityAdapter.getInitialState(defaultState);

export const prioritiesReducer = createSlice({
  name: "priorities",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // getPriorities
    builder.addCase(getPriorities.fulfilled, (state, action) => {
      priorityAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(getPriorities.rejected, (_, action) => {
      console.error(action?.payload ?? action.error.message ?? "Error");
    });
    // addPriorities
    builder.addCase(addPriorities.fulfilled, priorityAdapter.addOne);
    builder.addCase(addPriorities.rejected, (_, action) => {
      console.error(action?.payload ?? action.error.message ?? "Error");
    });
    // filter
    builder.addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });
    // sort
    builder.addCase(setSort, (state, action) => {
      state.sort = action.payload;
    });
  },
});

export const {
  selectAll: selectAllPriorities,
  selectById: selectPriorityById,
  selectIds: selectPriorityIds,
} = priorityAdapter.getSelectors<RootState>(state => state.priorities);
