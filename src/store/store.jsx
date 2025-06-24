import { configureStore } from '@reduxjs/toolkit';
import  userReducer from "./storeSlice"
import {loadState, saveState } from "./localstorage"
const persistedState = loadState();
export const store = configureStore({
  reducer: {
   user: userReducer,
  },
 preloadedState: persistedState,
});
store.subscribe(() => {
  saveState({
    user: store.getState().user,
  });
});