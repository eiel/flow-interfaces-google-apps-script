// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/border-style

opaque type gas$Spreadsheet$BorderStyle = any;

interface gas$Spreadsheet$Enum$BorderStyle {
  +DOTTED: gas$Spreadsheet$BorderStyle;
  +DASHED: gas$Spreadsheet$BorderStyle;
  +SOLID: gas$Spreadsheet$BorderStyle;
  +SOLID_MEDIUM: gas$Spreadsheet$BorderStyle;
  +SOLID_THICK: gas$Spreadsheet$BorderStyle;
  +DOUBLE: gas$Spreadsheet$BorderStyle;
}
