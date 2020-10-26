interface Message {
  id: UUID;
  sender: UUID;
  channel: UUID;
  sentAt: string;
  text: string;
}

type Messages = Record<Message['id'], Message>;
