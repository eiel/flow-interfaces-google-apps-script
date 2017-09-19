// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria

opaque type gas$Spreadsheet$DataValidationCriteria = any;

interface gas$Spreadsheet$Enum$DataValidationCriteria {
  +DATE_AFTER: gas$Spreadsheet$DataValidationCriteria;
  +DATE_BEFORE: gas$Spreadsheet$DataValidationCriteria;
  +DATE_BETWEEN: gas$Spreadsheet$DataValidationCriteria;
  +DATE_EQUAL_TO: gas$Spreadsheet$DataValidationCriteria;
  +DATE_IS_VALID_DATE: gas$Spreadsheet$DataValidationCriteria;
  +DATE_NOT_BETWEEN: gas$Spreadsheet$DataValidationCriteria;
  +DATE_ON_OR_AFTER: gas$Spreadsheet$DataValidationCriteria;
  +DATE_ON_OR_BEFORE: gas$Spreadsheet$DataValidationCriteria;
  +NUMBER_BETWEEN: gas$Spreadsheet$DataValidationCriteria;
  +NUMBER_EQUAL_TO: gas$Spreadsheet$DataValidationCriteria;
  +NUMBER_GREATER_THAN: gas$Spreadsheet$DataValidationCriteria;
  +NUMBER_GREATER_THAN_OR_EQUAL_TO: gas$Spreadsheet$DataValidationCriteria;
  +NUMBER_LESS_THAN: gas$Spreadsheet$DataValidationCriteria;
  +NUMBER_LESS_THAN_OR_EQUAL_TO: gas$Spreadsheet$DataValidationCriteria;
  +NUMBER_NOT_BETWEEN: gas$Spreadsheet$DataValidationCriteria;
  +NUMBER_NOT_EQUAL_TO: gas$Spreadsheet$DataValidationCriteria;
  +TEXT_CONTAINS: gas$Spreadsheet$DataValidationCriteria;
  +TEXT_DOES_NOT_CONTAIN: gas$Spreadsheet$DataValidationCriteria;
  +TEXT_EQUAL_TO: gas$Spreadsheet$DataValidationCriteria;
  +TEXT_IS_VALID_EMAIL: gas$Spreadsheet$DataValidationCriteria;
  +TEXT_IS_VALID_URL: gas$Spreadsheet$DataValidationCriteria;
  +VALUE_IN_LIST: gas$Spreadsheet$DataValidationCriteria;
  +VALUE_IN_RANGE: gas$Spreadsheet$DataValidationCriteria;
  +CUSTOM_FORMULA: gas$Spreadsheet$DataValidationCriteria;
}
