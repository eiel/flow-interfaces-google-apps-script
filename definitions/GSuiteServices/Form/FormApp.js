// @flow
// @see https://developers.google.com/apps-script/reference/forms/form-app

interface gas$Form$FormApp {
  +Alignment: gas$Form$Enum$Alignment;
  +DestinationType: gas$Form$Enum$DestinationType;
  +FeedbackType: gas$Form$Enum$FeedbackType;
  +ItemType: gas$Form$Enum$ItemType;
  +PageNavigationType: gas$Form$Enum$PageNavigationType;

  create(title: string): gas$Form$Form;
  createCheckboxGridValidation(): gas$Form$CheckboxGridValidationBuilder;
  createCheckboxValidation(): gas$Form$CheckboxValidationBuilder;
  createFeedback(): gas$Form$QuizFeedbackBuilder;
  createGridValidation(): gas$Form$GridValidationBuilder;
  createParagraphTextValidation(): gas$Form$ParagraphTextValidationBuilder;
  createTextValidation(): gas$Form$TextValidationBuilder;
  getActiveForm(): gas$Form$Form;
  getUi(): gas$Ui;
  openById(id: string): gas$Form$Form;
  openByUrl(url: string): gas$Form$Form;
}
