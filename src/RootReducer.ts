import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

const reducers = {
  ...TodoReducer,
};

export const rootReducer = combineReducers({
  ...reducers,
});

export type AppState = ReturnType<typeof rootReducer>;
