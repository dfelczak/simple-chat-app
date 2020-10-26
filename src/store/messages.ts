import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Messages = {};

export const messages = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {
    loadData(_, action: PayloadAction<Messages>) {
      return action.payload;
    },
    addMessage(state, action: PayloadAction<Message>) {
      const { id } = action.payload;
      return { ...state, [id]: action.payload };
    },
  },
});

export const { actions } = messages;
