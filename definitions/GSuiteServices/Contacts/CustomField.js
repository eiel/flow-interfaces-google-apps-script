// @flow
// @see https://developers.google.com/apps-script/reference/contacts/custom-field

interface gas$Contacts$CustomField {
  deleteCustomField(): void;
  getLabel(): Object;
  getValue(): Object;
  setLabel(field: gas$Contacts$ExtendedField): gas$Contacts$CustomField;
  setLabel(label: string): gas$Contacts$CustomField;
  setValue(value: Object): gas$Contacts$CustomField;
}
