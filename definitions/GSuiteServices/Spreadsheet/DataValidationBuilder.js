// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder

interface gas$Spreadsheet$DataValidationBuilder {
  build(): gas$Spreadsheet$DataValidation;
  copy(): gas$Spreadsheet$DataValidationBuilder;
  getAllowInvalid(): boolean;
  getCriteriaType(): gas$Spreadsheet$DataValidationCriteria;
  getCriteriaValues(): Object[];
  getHelpText(): string;
  requireDate(): gas$Spreadsheet$DataValidationBuilder;
  requireDateAfter(date: Date): gas$Spreadsheet$DataValidationBuilder;
  requireDateBefore(date: Date): gas$Spreadsheet$DataValidationBuilder;
  requireDateBetween(start: Date, end: Date): gas$Spreadsheet$DataValidationBuilder;
  requireDateEqualTo(date: Date): gas$Spreadsheet$DataValidationBuilder;
  requireDateNotBetween(start: Date, end: Date): gas$Spreadsheet$DataValidationBuilder;
  requireDateOnOrAfter(date: Date): gas$Spreadsheet$DataValidationBuilder;
  requireDateOnOrBefore(date: Date): gas$Spreadsheet$DataValidationBuilder;
  requireFormulaSatisfied(formula: string): gas$Spreadsheet$DataValidationBuilder;
  requireNumberBetween(start: number, end: number): gas$Spreadsheet$DataValidationBuilder;
  requireNumberEqualTo(number: number): gas$Spreadsheet$DataValidationBuilder;
  requireNumberGreaterThan(number: number): gas$Spreadsheet$DataValidationBuilder;
  requireNumberGreaterThanOrEqualTo(number: number): gas$Spreadsheet$DataValidationBuilder;
  requireNumberLessThan(number: number): gas$Spreadsheet$DataValidationBuilder;
  requireNumberLessThanOrEqualTo(number: number): gas$Spreadsheet$DataValidationBuilder;
  requireNumberNotBetween(start: number, end: number): gas$Spreadsheet$DataValidationBuilder;
  requireNumberNotEqualTo(number: number): gas$Spreadsheet$DataValidationBuilder;
  requireTextContains(text: string): gas$Spreadsheet$DataValidationBuilder;
  requireTextDoesNotContain(text: string): gas$Spreadsheet$DataValidationBuilder;
  requireTextEqualTo(text: string): gas$Spreadsheet$DataValidationBuilder;
  requireTextIsEmail(): gas$Spreadsheet$DataValidationBuilder;
  requireTextIsUrl(): gas$Spreadsheet$DataValidationBuilder;
  requireValueInList(values: string[]): gas$Spreadsheet$DataValidationBuilder;
  requireValueInList(values: string[], showDropdown: boolean): gas$Spreadsheet$DataValidationBuilder;
  requireValueInRange(range: gas$Spreadsheet$Range): gas$Spreadsheet$DataValidationBuilder;
  requireValueInRange(range: gas$Spreadsheet$Range, showDropdown: boolean): gas$Spreadsheet$DataValidationBuilder;
  setAllowInvalid(allowInvalidData: boolean): gas$Spreadsheet$DataValidationBuilder;
  setHelpText(helpText: string): gas$Spreadsheet$DataValidationBuilder;
  withCriteria(criteria: gas$Spreadsheet$DataValidation, args: Object[]): gas$Spreadsheet$DataValidationBuilder;
}
