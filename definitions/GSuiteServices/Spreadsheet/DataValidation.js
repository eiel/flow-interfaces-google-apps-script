// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/data-validation

interface gas$Spreadsheet$DataValidation {
  copy(): gas$Spreadsheet$DataValidationBuilder;
  getAllowInvalid(): boolean;
  getCriteriaType(): gas$Spreadsheet$DataValidationCriteria;
  getCriteriaValues(): Object[];
  getHelpText(): string;
}
