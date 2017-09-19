// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/protection-type

opaque type gas$Spreadsheet$ProtectionType = any;

interface gas$Spreadsheet$Enum$ProtectionType {
  +RANGE: gas$Spreadsheet$ProtectionType;
  +SHEET: gas$Spreadsheet$ProtectionType;
}
