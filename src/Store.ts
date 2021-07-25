import { createStore, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { AppState, rootReducer } from "./RootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = composeEnhancers(
  applyMiddleware(thunk as ThunkMiddleware<AppState>)
)(createStore)(rootReducer);

export type RootStore = ReturnType<typeof rootReducer>;

export default store;
