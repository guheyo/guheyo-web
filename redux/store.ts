import { configureStore } from "@reduxjs/toolkit";
import guildsSlice from './features/guildsSlice';
import categoriesSlice from './features/categoriesSlice';
import postsSlice from "./features/postsSlice";

export const store = configureStore({
  reducer: {
    guildsSlice,
    categoriesSlice,
    postsSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;