import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Contacts = {};

export const contacts = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    loadData(_, action: PayloadAction<Contacts>) {
      return action.payload;
    },
  },
});

export const { actions } = contacts;
