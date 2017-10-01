// @flow
// @see https://developers.google.com/apps-script/reference/contacts/im-field

interface gas$Contacts$IMField {
  deleteIMField(): void;
  getAddress(): string;
  getLabel(): Object;
  isPrimary(): boolean;
  setAddress(address: string): gas$Contacts$IMField;
  setAsPrimary(): gas$Contacts$IMField;
  setLabel(field: gas$Contacts$Field): gas$Contacts$IMField;
  setLabel(label: string): gas$Contacts$IMField;
}
