// @flow
// @see https://developers.google.com/apps-script/reference/script/document-trigger-builder

interface gas$DocumentTriggerBuilder {
  create(): gas$Trigger;
  onOpen(): gas$DocumentTriggerBuilder;
}
