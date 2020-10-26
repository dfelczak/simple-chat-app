import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Channels = {};

export const channels = createSlice({
  name: 'channel',
  initialState: initialState,
  reducers: {
    loadData(_, action: PayloadAction<Channels>) {
      return action.payload;
    },
  },
});

export const { actions } = channels;
