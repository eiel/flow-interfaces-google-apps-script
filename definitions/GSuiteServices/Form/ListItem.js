// @flow
// @see https://developers.google.com/apps-script/reference/forms/list-item

interface gas$Form$ListItem {
  createChoice(value: string): gas$Form$Choice;
  createChoice(value: string, isCorrect: boolean): gas$Form$Choice;
  createChoice(value: string, navigationItem: gas$Form$PageBreakItem): gas$Form$Choice;
  createChoice(value: string, navigationType: gas$Form$PageNavigationType): gas$Form$Choice;
  createResponse(response: string): gas$Form$ItemResponse;
  duplicate(): gas$Form$ListItem;
  getChoices(): gas$Form$Choice[];
  getFeedbackForCorrect(): gas$Form$QuizFeedback;
  getFeedbackForIncorrect(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPoints(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  isRequired(): boolean	;
  setChoiceValues(values: string[]): gas$Form$ListItem;
  setChoices(choices: gas$Form$Choice[]): gas$Form$ListItem;
  setFeedbackForCorrect(feedback: gas$Form$QuizFeedback): gas$Form$ListItem;
  setFeedbackForIncorrect(feedback: gas$Form$QuizFeedback): gas$Form$ListItem;
  setHelpText(text: string): gas$Form$ListItem;
  setPoints(points: gas$Integer): gas$Form$ListItem;
  setRequired(enabled: boolean): gas$Form$ListItem;
  setTitle(title: string): gas$Form$ListItem;
}
