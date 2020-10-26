interface Channel {
  id: UUID;
  participants: UUID[];
}

type Channels = Record<Channel['id'], Channel>;
type ChannelWithParticipants = { id: UUID; participants: Contact[] };
type ChannelWithMessages = { id: UUID; messages: Message[] };
