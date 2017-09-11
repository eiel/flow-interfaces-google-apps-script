// @flow
// @see https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder

interface gas$SpreadsheetTriggerBuilder {
  create(): gas$Trigger;
  onChange(): gas$SpreadsheetTriggerBuilder;
  onEdit(): gas$SpreadsheetTriggerBuilder;
  onFormSubmit(): gas$SpreadsheetTriggerBuilder;
  onOpen(): gas$SpreadsheetTriggerBuilder;
}
