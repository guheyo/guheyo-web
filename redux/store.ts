import { configureStore } from '@reduxjs/toolkit';
import guildsSlice from './features/guilds-slice';
import categoriesSlice from './features/categories-slice';
import postsSlice from './features/posts-slice';

export const store = configureStore({
  reducer: {
    guildsSlice,
    categoriesSlice,
    postsSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
