// @flow
// @see https://developers.google.com/apps-script/reference/script/trigger-builder

interface gas$TriggerBuilder {
  forDocument(document: gas$Document$Document): gas$DocumentTriggerBuilder;
  forDocument(key: string): gas$DocumentTriggerBuilder;
  forForm(form: gas$Form$Form): gas$FormTriggerBuilder;
  forForm(key: string): gas$FormTriggerBuilder;
  forSpreadsheet(sheet: gas$Spreadsheet$Spreadsheet): gas$SpreadsheetTriggerBuilder;
  forSpreadsheet(key: string): gas$SpreadsheetTriggerBuilder;
  timeBased(): gas$ClockTriggerBuilder;
}
