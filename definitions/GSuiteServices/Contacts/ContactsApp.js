// @flow
// @see https://developers.google.com/apps-script/reference/contacts/contacts-app

interface gas$Contacts$ContactsApp {
  +ExtendedField: gas$Contacts$Enum$ExtendedField;
  +Field: gas$Contacts$Enum$Field;
  +Gender: gas$Contacts$Enum$Gender;
  +Month: gas$Enum$Month;
  +Priority: gas$Contacts$Enum$Priority;
  +Sensitivity: gas$Contacts$Enum$Sensitivity;

  createContact(givenName: string, familyName: string, email: string): gas$Contacts$Contact;
  createContactGroup(name: string): gas$Contacts$ContactGroup;
  deleteContact(contact: gas$Contacts$Contact): void;
  deleteContactGroup(group: gas$Contacts$ContactGroup): void;
  getContact(emailAddress: string): gas$Contacts$Contact;
  getContactById(id: string): gas$Contacts$Contact;
  getContactGroup(name: string): gas$Contacts$ContactGroup;
  getContactGroupById(id: string): gas$Contacts$ContactGroup;
  getContactGroups(): gas$Contacts$ContactGroup[];
  getContacts(): gas$Contacts$Contact[];
  getContactsByAddress(query: string): gas$Contacts$Contact[];
  getContactsByAddress(query: string, label: gas$Contacts$Field): gas$Contacts$Contact[];
  getContactsByAddress(query: string, label: string): gas$Contacts$Contact[];
  getContactsByCompany(query: string): gas$Contacts$Contact[];
  getContactsByCustomField(query: string, label: gas$Contacts$ExtendedField): gas$Contacts$Contact[];
  getContactsByDate(month: gas$Month, day: gas$Integer, label: gas$Contacts$Field): gas$Contacts$Contact[];
  getContactsByDate(month: gas$Month, day: gas$Integer, year: gas$Integer, label: gas$Contacts$Field): gas$Contacts$Contact[];
  getContactsByDate(month: gas$Month, day: gas$Integer, year: gas$Integer, label: string): gas$Contacts$Contact[];
  getContactsByDate(month: gas$Month, day: gas$Integer, label: string): gas$Contacts$Contact[];
  getContactsByEmailAddress(query: string): gas$Contacts$Contact[];
  getContactsByEmailAddress(query: string, label: gas$Contacts$Field): gas$Contacts$Contact[];
  getContactsByEmailAddress(query: string, label: string): gas$Contacts$Contact[];
  getContactsByGroup(group: gas$Contacts$ContactGroup): gas$Contacts$Contact[];
  getContactsByIM(query: string): gas$Contacts$Contact[];
  getContactsByIM(query: string, label: gas$Contacts$Field): gas$Contacts$Contact[];
  getContactsByIM(query: string, label: string): gas$Contacts$Contact[];
  getContactsByJobTitle(query: string): gas$Contacts$Contact[];
  getContactsByName(query: string): gas$Contacts$Contact[];
  getContactsByName(query: string, label: gas$Contacts$Field): gas$Contacts$Contact[];
  getContactsByNotes(query: string): gas$Contacts$Contact[];
  getContactsByPhone(query: string): gas$Contacts$Contact[];
  getContactsByPhone(query: string, label: gas$Contacts$Field): gas$Contacts$Contact[];
  getContactsByPhone(query: string, label: string): gas$Contacts$Contact[];
  getContactsByUrl(query: string): gas$Contacts$Contact[];
  getContactsByUrl(query: string, label: gas$Contacts$Field): gas$Contacts$Contact[];
  getContactsByUrl(query: string, label: string): gas$Contacts$Contact[];
}
