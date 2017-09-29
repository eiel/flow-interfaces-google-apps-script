// @flow
// @see https://developers.google.com/apps-script/reference/forms/text-item

interface gas$Form$TextItem {
  clearValidation(): gas$Form$TextItem;
  createResponse(response: string): gas$Form$ItemResponse;
  duplicate(): gas$Form$TextItem;
  getGeneralFeedback(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPoints(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  isRequired(): boolean;
  setGeneralFeedback(feedback: gas$Form$QuizFeedback): gas$Form$TextItem;
  setHelpText(text: string): gas$Form$TextItem;
  setPoints(points: gas$Integer): gas$Form$TextItem;
  setRequired(enabled: boolean): gas$Form$TextItem;
  setTitle(title: string): gas$Form$TextItem;
  setValidation(validation: gas$Form$TextValidation): gas$Form$TextItem;
}
