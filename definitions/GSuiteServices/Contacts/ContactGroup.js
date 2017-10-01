// @flow
// @see https://developers.google.com/apps-script/reference/contacts/contact-group

interface gas$Contacts$ContactGroup {
  addContact(contact: gas$Contacts$Contact): gas$Contacts$ContactGroup;
  deleteGroup(): void;
  getContacts(): gas$Contacts$Contact[];
  getId(): string;
  getName(): string;
  isSystemGroup(): boolean;
  removeContact(contact: gas$Contacts$Contact): gas$Contacts$ContactGroup;
  setName(name: string): gas$Contacts$ContactGroup;
}
