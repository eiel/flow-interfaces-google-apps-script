// @flow
// @see https://developers.google.com/apps-script/reference/contacts/phone-field

interface gas$Contacts$PhoneField {
  deletePhoneField(): void;
  getLabel(): Object;
  getPhoneNumber(): string;
  isPrimary(): boolean;
  setAsPrimary(): gas$Contacts$PhoneField;
  setLabel(field: gas$Contacts$Field): gas$Contacts$PhoneField;
  setLabel(label: string): gas$Contacts$PhoneField;
  setPhoneNumber(number: string): gas$Contacts$PhoneField;
}
