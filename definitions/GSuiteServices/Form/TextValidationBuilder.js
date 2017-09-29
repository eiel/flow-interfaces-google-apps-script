// @flow
// @see https://developers.google.com/apps-script/reference/forms/text-validation-builder

interface gas$Form$TextValidationBuilder {
  requireNumber(): gas$Form$TextValidationBuilder;
  requireNumberBetween(start: number, end: number): gas$Form$TextValidationBuilder;
  requireNumberEqualTo(number: number): gas$Form$TextValidationBuilder;
  requireNumberGreaterThan(number: number): gas$Form$TextValidationBuilder;
  requireNumberGreaterThanOrEqualTo(number: number): gas$Form$TextValidationBuilder;
  requireNumberLessThan(number): gas$Form$TextValidationBuilder;
  requireNumberLessThanOrEqualTo(number: number): gas$Form$TextValidationBuilder;
  requireNumberNotBetween(start: number, end: number): gas$Form$TextValidationBuilder;
  requireNumberNotEqualTo(number: number): gas$Form$TextValidationBuilder;
  requireTextContainsPattern(pattern: string): gas$Form$TextValidationBuilder;
  requireTextDoesNotContainPattern(pattern: string): gas$Form$TextValidationBuilder;
  requireTextDoesNotMatchPattern(pattern: string): gas$Form$TextValidationBuilder;
  requireTextIsEmail(): gas$Form$TextValidationBuilder;
  requireTextIsUrl(): gas$Form$TextValidationBuilder;
  requireTextLengthGreaterThanOrEqualTo(number: number): gas$Form$TextValidationBuilder;
  requireTextLengthLessThanOrEqualTo(number: number): gas$Form$TextValidationBuilder;
  requireTextMatchesPattern(pattern: string): gas$Form$TextValidationBuilder;
  requireWholeNumber(): gas$Form$TextValidationBuilder;
}
