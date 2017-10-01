// @flow
// @see https://developers.google.com/apps-script/reference/contacts/date-field

interface gas$Contacts$DateField {
  deleteDateField(): void;
  getDay(): gas$Integer;
  getLabel(): Object;
  getMonth(): gas$Month;
  getYear(): gas$Integer;
  setDate(month: gas$Month, day: gas$Integer): gas$Contacts$DateField;
  setDate(month: gas$Month, day: gas$Integer, year: gas$Integer): gas$Contacts$DateField;
  setLabel(label: gas$Contacts$Field): gas$Contacts$DateField;
  setLabel(label: string): gas$Contacts$DateField;
}
