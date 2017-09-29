// @flow
// @see https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder

interface gas$Form$CheckboxValidationBuilder {
  requireSelectAtLeast(number: gas$Integer): gas$Form$CheckboxValidationBuilder;
  requireSelectAtMost(number: gas$Integer): gas$Form$CheckboxValidationBuilder;
  requireSelectExactly(number: gas$Integer): gas$Form$CheckboxValidationBuilder;
}
