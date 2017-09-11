// @flow
// @see https://developers.google.com/apps-script/reference/script/form-trigger-builder

interface gas$FormTriggerBuilder {
  create(): gas$Trigger;
  onFormSubmit(): gas$FormTriggerBuilder;
  onOpen(): gas$FormTriggerBuilder;
}
