// @flow
// @see https://developers.google.com/apps-script/reference/contacts/url-field

interface gas$Contacts$UrlField {
  deleteUrlField(): void;
  getAddress(): string;
  getLabel(): Object;
  isPrimary(): boolean;
  setAddress(address: string): gas$Contacts$UrlField;
  setAsPrimary(): gas$Contacts$UrlField;
  setLabel(field: gas$Contacts$Field): gas$Contacts$UrlField;
  setLabel(label: string): gas$Contacts$UrlField;
}
