export const getChannelContact = (meId: Contact['id'], channelParticipants: Contact[]) => {
  return channelParticipants.filter((contact) => contact.id !== meId)[0];
};
