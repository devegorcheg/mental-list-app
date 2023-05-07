import { Action, AnyAction } from "@reduxjs/toolkit";

interface RejectedAction extends Action {
  payload?: Error;
  error: Error;
}

export function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith("rejected");
}
