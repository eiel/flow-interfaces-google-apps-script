// @flow
// @see https://developers.google.com/apps-script/reference/forms/multiple-choice-item

interface gas$Form$MultipleChoiceItem {
  createChoice(value: string): gas$Form$Choice;
  createChoice(value: string, isCorrect: boolean): gas$Form$Choice;
  createChoice(value: string, navigationItem: gas$Form$PageBreakItem): gas$Form$Choice;
  createChoice(value: string, navigationType: gas$Form$PageNavigationType): gas$Form$Choice;
  createResponse(response: string): gas$Form$ItemResponse;
  duplicate(): gas$Form$MultipleChoiceItem;
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
  setChoiceValues(values: string[]): gas$Form$MultipleChoiceItem;
  setChoices(choices: gas$Form$Choice[]): gas$Form$MultipleChoiceItem;
  setFeedbackForCorrect(feedback: gas$Form$QuizFeedback): gas$Form$MultipleChoiceItem;
  setFeedbackForIncorrect(feedback: gas$Form$QuizFeedback): gas$Form$MultipleChoiceItem;
  setHelpText(text: string): gas$Form$MultipleChoiceItem;
  setPoints(points: gas$Integer): gas$Form$MultipleChoiceItem;
  setRequired(enabled: boolean): gas$Form$MultipleChoiceItem;
  setTitle(title: string): gas$Form$MultipleChoiceItem;
  showOtherOption(enabled: boolean): gas$Form$MultipleChoiceItem;
}
