import { getGuildCategories } from '@/app/lib/api/guilds';
import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  PayloadAction,
} from '@reduxjs/toolkit';
import _ from 'lodash';
import { Category } from 'prisma';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (guildName: string) => getGuildCategories(guildName),
);

interface CategoriesState {
  categories: Array<Category>;
  categoryId: string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  currentRequestId: string | undefined;
  error: SerializedError | null;
}

const initialState = {
  categories: [],
  categoryId: '',
  loading: 'idle',
  currentRequestId: undefined,
  error: null,
} as CategoriesState;

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    reset: () => initialState,
    setCategoryId: (state, action: PayloadAction<string>) => {
      state.categoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.categories = action.payload;
        state.currentRequestId = undefined;
        if (!state.categoryId) {
          state.categoryId = _.get(state.categories, '0.id', '');
        }
      }
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  },
});

export const { setCategoryId } = categories.actions;
export default categories.reducer;
