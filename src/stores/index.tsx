import { PreloadedState, configureStore } from "@reduxjs/toolkit";
import { reducer as siteReducer } from "./site-store";

export function createStore(preloadedState: PreloadedState<any> = {}) {
  const store = configureStore({
    reducer: {
      site: siteReducer,
    },
    preloadedState,
  });

  return store;
}

export const store = createStore({});
