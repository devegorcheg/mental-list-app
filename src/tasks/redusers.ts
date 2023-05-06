import {
  createSlice,
  createEntityAdapter,
  Action,
  AnyAction,
} from "@reduxjs/toolkit";

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

interface RejectedAction extends Action {
  payload?: Error;
  error: Error;
}

const tasksAdapter = createEntityAdapter<Task>({
  selectId: ({ _id }) => _id,
});

const initialState = tasksAdapter.getInitialState();

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith("rejected");
}

export const tasksReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // addTask
    builder.addCase(addTask.fulfilled, tasksAdapter.addOne);
    // get tasks
    builder.addCase(getTasks.fulfilled, (state, action) => {
      tasksAdapter.setAll(state, action);
    });
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
