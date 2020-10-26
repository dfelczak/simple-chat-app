import { v4 as uuidv4 } from 'uuid';

export const createMessage = (text: Message['text'], senderId: Message['id'], channelId: Channel['id']): Message => {
  return {
    text,
    sender: senderId,
    sentAt: new Date().toString(),
    id: uuidv4(),
    channel: channelId,
  };
};
