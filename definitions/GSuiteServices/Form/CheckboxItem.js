// @flow
// @see https://developers.google.com/apps-script/reference/forms/checkbox-item

interface gas$Form$CheckboxItem {
  clearValidation(): gas$Form$CheckboxItem;
  createChoice(value: string): gas$Form$Choice;
  createChoice(value: string, isCorrect: boolean): gas$Form$Choice;
  createResponse(responses: string[]): gas$Form$ItemResponse;
  duplicate(): gas$Form$CheckboxItem;
  getChoices(): gas$Form$Choice[];
  getFeedbackForCorrect(): gas$Form$QuizFeedback;
  getFeedbackForIncorrect(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPoints(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  hasOtherOption(): boolean;
  isRequired(): boolean;
  setChoiceValues(values: string): gas$Form$CheckboxItem;
  setChoices(choices: gas$Form$Choice): gas$Form$CheckboxItem;
  setFeedbackForCorrect(feedback: gas$Form$QuizFeedback): gas$Form$CheckboxItem;
  setFeedbackForIncorrect(feedback: gas$Form$QuizFeedback): gas$Form$CheckboxItem;
  setHelpText(text: string): gas$Form$CheckboxItem;
  setPoints(points: gas$Integer): gas$Form$CheckboxItem;
  setRequired(enabled: boolean): gas$Form$CheckboxItem;
  setTitle(title: string): gas$Form$CheckboxItem;
  setValidation(validation: gas$Form$CheckboxValidation): gas$Form$CheckboxItem;
  showOtherOption(enabled: boolean): gas$Form$CheckboxItem;
}
