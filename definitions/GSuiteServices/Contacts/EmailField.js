// @flow
// @see https://developers.google.com/apps-script/reference/contacts/email-field

interface gas$Contacts$EmailField {
  deleteEmailField(): void;
  getAddress(): string;
  getDisplayName(): string;
  getLabel(): Object;
  isPrimary(): boolean;
  setAddress(address: string): gas$Contacts$EmailField;
  setAsPrimary(): gas$Contacts$EmailField;
  setDisplayName(name: string): gas$Contacts$EmailField;
  setLabel(field: gas$Contacts$Field): gas$Contacts$EmailField;
  setLabel(label: string): gas$Contacts$EmailField;
}
