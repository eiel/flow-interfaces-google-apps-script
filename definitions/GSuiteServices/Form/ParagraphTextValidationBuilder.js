// @flow
// @see https://developers.google.com/apps-script/reference/forms/paragraph-text-validation-builder

interface gas$Form$ParagraphTextValidationBuilder {
  requireTextContainsPattern(pattern: string): gas$Form$ParagraphTextValidationBuilder;
  requireTextDoesNotContainPattern(pattern: string): gas$Form$ParagraphTextValidationBuilder;
  requireTextDoesNotMatchPattern(pattern: string): gas$Form$ParagraphTextValidationBuilder;
  requireTextLengthGreaterThanOrEqualTo(number: gas$Integer): gas$Form$ParagraphTextValidationBuilder;
  requireTextLengthLessThanOrEqualTo(number: gas$Integer): gas$Form$ParagraphTextValidationBuilder;
  requireTextMatchesPattern(pattern: string): gas$Form$ParagraphTextValidationBuilder;
}
