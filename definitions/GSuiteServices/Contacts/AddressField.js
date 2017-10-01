// @flow
// @see https://developers.google.com/apps-script/reference/contacts/address-field

interface gas$Contacts$AddressField {
  deleteAddressField(): void;
  getAddress(): string;
  getLabel(): Object;
  isPrimary(): boolean;
  setAddress(address: string): gas$Contacts$AddressField;
  setAsPrimary(): gas$Contacts$AddressField;
  setLabel(field: gas$Contacts$Field): gas$Contacts$AddressField;
  setLabel(label: string): gas$Contacts$AddressField;
}
