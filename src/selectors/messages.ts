import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/configure';

export const messagesSelector = (state: RootState) => state.messages;
export const messageListSelector = createSelector(messagesSelector, (messages) => Object.values(messages));
export const messageOrderedListSelector = createSelector(messageListSelector, (messageList) =>
  messageList.sort((a, b) => new Date(a.sentAt).getTime() - new Date(b.sentAt).getTime()),
);
