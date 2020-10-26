interface Contact {
  id: UUID;
  firstName: string;
  lastName: string;
  avatar: string;
}

type Contacts = Record<Contact['id'], Contact>;
