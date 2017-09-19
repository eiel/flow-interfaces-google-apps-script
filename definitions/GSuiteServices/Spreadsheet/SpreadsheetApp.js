// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app

interface gas$Spreadsheet$SpreadsheetApp {
  +BorderStyle: gas$Spreadsheet$Enum$BorderStyle;
  +DataValidationCriteria: gas$Spreadsheet$DataValidationCriteria;
  +ProtectionType: gas$Spreadsheet$ProtectionType;

  create(name: string): gas$Spreadsheet$Spreadsheet;
  create(name: string, rows: number, columns: number): gas$Spreadsheet$Spreadsheet;
  flush(): void;
  getActive(): gas$Spreadsheet$Spreadsheet;
  getActiveRange(): gas$Spreadsheet$Range;
  getActiveSheet(): gas$Spreadsheet$Sheet;
  getActiveSpreadsheet(): gas$Spreadsheet$Spreadsheet;
  getUi(): gas$Ui;
  newDataValidation(): gas$Spreadsheet$DataValidationBuilder;
  open(file: gas$Drive$File): gas$Spreadsheet$Spreadsheet;
  openById(id: string): gas$Spreadsheet$Spreadsheet;
  openByUrl(url: string): gas$Spreadsheet$Spreadsheet;
  setActiveRange(range: gas$Spreadsheet$Range): gas$Spreadsheet$Range;
  setActiveSheet(sheet: gas$Spreadsheet$Sheet): gas$Spreadsheet$Sheet;
  setActiveSpreadsheet(newActiveSpreadsheet: gas$Spreadsheet$Spreadsheet): void;
}

declare var spreadsheetApp: gas$Spreadsheet$SpreadsheetApp;
