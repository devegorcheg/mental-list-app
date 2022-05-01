import { createSlice } from "@reduxjs/toolkit";

// actions
import { getPriorities, setFilter, setSort } from "./actions";

// types
import { Maybe } from "models/types";

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

interface InitialState {
  list: Priority[];
  filter: Maybe<string>;
  sort: Sort;
}

const initialState: InitialState = {
  list: [],
  filter: null,
  sort: Sort.ASC,
};

export const prioritiesReducer = createSlice({
  name: "priorities",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPriorities.pending, state => {
      state.list = [];
    });
    builder.addCase(getPriorities.fulfilled, (state, action) => {
      state.list = [...action.payload];
    });
    builder.addCase(getPriorities.rejected, (_, action) => {
      console.error(
        action?.payload ?? action.error.message ?? "Приоритеты не найдены",
      );
    });

    builder.addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    });

    builder.addCase(setSort, (state, action) => {
      state.sort = action.payload;
    });
  },
});
