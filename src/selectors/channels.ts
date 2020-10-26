import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configure';
import { contactsSelector } from './contacts';
import { messageOrderedListSelector } from './messages';

const channelsSelector = (state: RootState) => state.channels;

export const channelListSelector = createSelector(channelsSelector, (channels) => {
  return Object.values(channels);
});

const combineChannelWithParticipants = (channel: Channel, contacts: Contacts) => {
  return {
    ...channel,
    participants: channel.participants.map((participantId) => contacts[participantId]) || [],
  };
};

export const channelListWithParticipantsSelector = createSelector(
  channelListSelector,
  contactsSelector,
  (channelList, contacts) => {
    return channelList.reduce((accu, channel) => {
      return [...accu, combineChannelWithParticipants(channel, contacts)];
    }, [] as ChannelWithParticipants[]);
  },
);

export const channelsWithMessagesSelector = createSelector(
  channelListSelector,
  messageOrderedListSelector,
  (channelList, messageList) => {
    return channelList.reduce((accu, channel) => {
      return {
        ...accu,
        [channel.id]: {
          ...channel,
          messages: messageList.filter((message) => message.channel === channel.id),
        },
      };
    }, {} as Record<Channel['id'], ChannelWithMessages>);
  },
);
