// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/protection

interface gas$Spreadsheet$Protection {
  addEditor(emailAddress: string): gas$Spreadsheet$Protection;
  addEditor(user: gas$User): gas$Spreadsheet$Protection;
  addEditors(emailAddresses: string[]): gas$Spreadsheet$Protection;
  canDomainEdit(): boolean;
  canEdit(): boolean;
  getDescription(): string;
  getEditors(): gas$User[];
  getProtectionType(): gas$Spreadsheet$ProtectionType;
  getRange(): gas$Spreadsheet$Range;
  getRangeName(): string;
  getUnprotectedRanges(): gas$Spreadsheet$Range[];
  isWarningOnly(): boolean;
  remove(): void;
  removeEditor(emailAddress: string): gas$Spreadsheet$Protection;
  removeEditor(user: gas$User): gas$Spreadsheet$Protection;
  removeEditors(emailAddresses: string): gas$Spreadsheet$Protection;
  setDescription(description: string): gas$Spreadsheet$Protection;
  setDomainEdit(editable: boolean): gas$Spreadsheet$Protection;
  setNamedRange(namedRange: gas$Spreadsheet$NamedRange): gas$Spreadsheet$Protection;
  setRange(range: gas$Spreadsheet$Range): gas$Spreadsheet$Protection;
  setRangeName(rangeName: string): gas$Spreadsheet$Protection;
  setUnprotectedRanges(ranges: gas$Spreadsheet$Range[]): gas$Spreadsheet$Protection;
  setWarningOnly(warningOnly: boolean): gas$Spreadsheet$Protection;
}
