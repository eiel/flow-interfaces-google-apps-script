// @flow
// @see https://developers.google.com/apps-script/reference/forms/duration-item

interface gas$Form$DurationItem {
  createResponse(hours: gas$Integer, minutes: gas$Integer, seconds: gas$Integer): gas$Form$ItemResponse;
  duplicate(): gas$Form$DurationItem;
  getGeneralFeedback(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPoints(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  isRequired(): boolean;
  setGeneralFeedback(feedback: gas$Form$QuizFeedback): gas$Form$DurationItem;
  setHelpText(text: string): gas$Form$DurationItem;
  setPoints(points: gas$Integer): gas$Form$DurationItem;
  setRequired(enabled: boolean): gas$Form$DurationItem;
  setTitle(title: string): gas$Form$DurationItem;
}
