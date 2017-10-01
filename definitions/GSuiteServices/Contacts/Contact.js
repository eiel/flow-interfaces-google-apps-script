// @flow
// @see https://developers.google.com/apps-script/reference/contacts/contact

interface gas$Contacts$Contact {
  addAddress(label: Object, address: string): gas$Contacts$AddressField;
  addCompany(company: string, title: string): gas$Contacts$CompanyField;
  addCustomField(label: Object, content: Object): gas$Contacts$CustomField;
  addDate(label: Object, month: gas$Month, day: gas$Integer, year: gas$Integer): gas$Contacts$DateField;
  addEmail(label: Object, address: string): gas$Contacts$EmailField;
  addIM(label: Object, address: string): gas$Contacts$IMField;
  addPhone(label: Object, number: string): gas$Contacts$PhoneField;
  addToGroup(group: gas$Contacts$ContactGroup): gas$Contacts$Contact;
  addUrl(label: Object, url: string): gas$Contacts$UrlField;
  deleteContact(): void;
  getAddresses(): gas$Contacts$AddressField[];
  getAddresses(label: Object): gas$Contacts$AddressField[];
  getCompanies(): gas$Contacts$CompanyField[];
  getContactGroups(): gas$Contacts$ContactGroup[];
  getCustomFields(): gas$Contacts$CustomField[];
  getCustomFields(label: Object): gas$Contacts$CustomField[];
  getDates(): gas$Contacts$DateField[];
  getDates(label: Object): gas$Contacts$DateField[];
  getEmails(): gas$Contacts$EmailField[];
  getEmails(label: Object): gas$Contacts$EmailField[];
  getFamilyName(): string;
  getFullName(): string;
  getGivenName(): string;
  getIMs(): gas$Contacts$IMField[];
  getIMs(label: Object): gas$Contacts$IMField[];
  getId(): string;
  getInitials(): string;
  getLastUpdated(): Date;
  getMaidenName(): string;
  getMiddleName(): string;
  getNickname(): string;
  getNotes(): string;
  getPhones(): gas$Contacts$PhoneField[];
  getPhones(label: Object): gas$Contacts$PhoneField[];
  getPrefix(): string;
  getPrimaryEmail(): string;
  getShortName(): string;
  getSuffix(): string;
  getUrls(): gas$Contacts$UrlField[];
  getUrls(label: Object): gas$Contacts$UrlField[];
  removeFromGroup(group: gas$Contacts$ContactGroup): gas$Contacts$Contact;
  setFamilyName(familyName: string): gas$Contacts$Contact;
  setFullName(fullName: string): gas$Contacts$Contact;
  setGivenName(givenName: string): gas$Contacts$Contact;
  setInitials(initials: string): gas$Contacts$Contact;
  setMaidenName(maidenName: string): gas$Contacts$Contact;
  setMiddleName(middleName: string): gas$Contacts$Contact;
  setNickname(nickname: string): gas$Contacts$Contact;
  setNotes(notes: string): gas$Contacts$Contact;
  setPrefix(prefix: string): gas$Contacts$Contact;
  setShortName(shortName: string): gas$Contacts$Contact;
  setSuffix(suffix: string): gas$Contacts$Contact;
}
