import { configureStore } from '@reduxjs/toolkit';

import { messages } from 'store/messages';
import { contacts } from 'store/contacts';
import { channels } from 'store/channels';

export const store = configureStore({
  reducer: {
    messages: messages.reducer,
    contacts: contacts.reducer,
    channels: channels.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
