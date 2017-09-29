// @flow
// @see https://developers.google.com/apps-script/reference/forms/date-time-item

interface gas$Form$DateTimeItem {
  createResponse(response: Date): gas$Form$ItemResponse;
  duplicate(): gas$Form$DateTimeItem;
  getGeneralFeedback(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPoints(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  includesYear(): boolean;
  isRequired(): boolean;
  setGeneralFeedback(feedback: gas$Form$QuizFeedback): gas$Form$DateTimeItem;
  setHelpText(text: string): gas$Form$DateTimeItem;
  setIncludesYear(enableYear: boolean): gas$Form$DateTimeItem;
  setPoints(points: gas$Integer): gas$Form$DateTimeItem;
  setRequired(enabled: boolean): gas$Form$DateTimeItem;
  setTitle(title: string): gas$Form$DateTimeItem;
}
