// @flow
// @see https://developers.google.com/apps-script/reference/forms/date-item

interface gas$Form$DateItem {
  createResponse(response: Date): gas$Form$ItemResponse;
  duplicate(): gas$Form$DateItem;
  getGeneralFeedback(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPoints(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  includesYear(): boolean;
  isRequired(): boolean;
  setGeneralFeedback(feedback: gas$Form$QuizFeedback) :gas$Form$DateItem;
  setHelpText(text: string): gas$Form$DateItem;
  setIncludesYear(enableYear: boolean): gas$Form$DateItem;
  setPoints(points: gas$Integer): gas$Form$DateItem;
  setRequired(enabled: boolean): gas$Form$DateItem;
  setTitle(title: string): gas$Form$DateItem;
}
