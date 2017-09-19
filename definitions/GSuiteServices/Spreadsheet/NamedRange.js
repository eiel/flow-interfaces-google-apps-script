// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/named-range

interface gas$Spreadsheet$NamedRange {
  getName(): string;
  getRange(): gas$Spreadsheet$Range;
  remove(): void;
  setName(name: string): gas$Spreadsheet$NamedRange;
  setRange(range: gas$Spreadsheet$Range): gas$Spreadsheet$NamedRange;
}
