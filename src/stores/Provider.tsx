"use client";
import { Provider } from "react-redux";
import { createStore } from "./index";
import { PreloadedState } from "@reduxjs/toolkit";

const Providers = ({
  children,
  preloadedState,
}: {
  children: React.ReactNode;
  preloadedState: PreloadedState<any>;
}) => {
  const store = createStore(preloadedState);
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
