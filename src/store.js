import { createStore } from "redux";
import reducer from "./Redux";
import { loadState, saveState } from "./local";
const persistedState = loadState();
const store = createStore(reducer, persistedState);
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
