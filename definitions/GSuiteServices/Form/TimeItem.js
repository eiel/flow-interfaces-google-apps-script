// @flow
// @see https://developers.google.com/apps-script/reference/forms/time-item

interface gas$Form$TimeItem {
  createResponse(hour: gas$Integer, minute: gas$Integer): gas$Form$ItemResponse;
  duplicate(): gas$Form$TimeItem;
  getGeneralFeedback(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPoints(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  isRequired(): boolean;
  setGeneralFeedback(feedback: gas$Form$QuizFeedback): gas$Form$TimeItem;
  setHelpText(text: string): gas$Form$TimeItem;
  setPoints(points: gas$Integer): gas$Form$TimeItem;
  setRequired(enabled: boolean): gas$Form$TimeItem;
  setTitle(title: string): gas$Form$TimeItem;
}
