export const isMineMessage = (me: Contact, message: Message) => message.sender === me.id;
