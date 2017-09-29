// @flow
// @see https://developers.google.com/apps-script/reference/forms/paragraph-text-item

interface gas$Form$ParagraphTextItem {
  clearValidation(): gas$Form$ParagraphTextItem;
  createResponse(response: string): gas$Form$ItemResponse;
  duplicate(): gas$Form$ParagraphTextItem;
  getGeneralFeedback(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPoints(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  isRequired(): boolean;
  setGeneralFeedback(feedback: gas$Form$QuizFeedback): gas$Form$ParagraphTextItem;
  setHelpText(text: string): gas$Form$ParagraphTextItem;
  setPoints(points: gas$Integer): gas$Form$ParagraphTextItem;
  setRequired(enabled: boolean): gas$Form$ParagraphTextItem;
  setTitle(title: string): gas$Form$ParagraphTextItem;
  setValidation(validation: gas$Form$ParagraphTextValidation): gas$Form$ParagraphTextItem;
}
