"use client";
import { Provider } from "react-redux";
import { createStore } from "./index";
import { PreloadedState } from "@reduxjs/toolkit";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const Providers = ({
  children,
  preloadedState,
}: {
  children: React.ReactNode;
  preloadedState: PreloadedState<any>;
}) => {
  const store = createStore(preloadedState);
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default Providers;
