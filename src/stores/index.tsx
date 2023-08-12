import {
  combineReducers,
  configureStore,
  PreloadedState,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { reducer as siteReducer } from "./site-store";

import storage from "./storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  site: siteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function createStore(preloadedState: PreloadedState<any> = {}) {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  return store;
}

export const store = createStore({});
