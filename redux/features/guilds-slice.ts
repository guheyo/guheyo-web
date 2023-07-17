import { getGuilds } from '@/app/lib/api/guilds';
import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit';
import { Guild } from 'prisma';

export const fetchGuilds = createAsyncThunk('guilds/fetchGuilds', async () => {
  const guilds = await getGuilds();
  return guilds;
});

interface GuildsState {
  guilds: Array<Guild>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  currentRequestId: string | undefined;
  error: SerializedError | null;
}

const initialState = {
  guilds: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null,
} as GuildsState;

export const guilds = createSlice({
  name: 'guilds',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGuilds.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(fetchGuilds.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.guilds = action.payload;
        state.currentRequestId = undefined;
      }
    });
    builder.addCase(fetchGuilds.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    });
  },
});

export default guilds.reducer;
