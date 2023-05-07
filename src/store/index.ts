import { combineReducers, configureStore, AnyAction } from "@reduxjs/toolkit";

// reducers
import { authReducer } from "auth/redusers";
import { prioritiesReducer } from "priorities/redusers";
import { tasksReducer } from "tasks/redusers";

// utils
import { accountsPassword, accountsClient } from "lib/accounts";

export const rootReducer = combineReducers({
  auth: authReducer.reducer,
  priorities: prioritiesReducer.reducer,
  tasks: tasksReducer.reducer,
});

const resettableRootReducer = (state: any, action: AnyAction) => {
  if (action.type === "auth/logout") {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resettableRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { accountsPassword, accountsClient },
      },
    }),
});
