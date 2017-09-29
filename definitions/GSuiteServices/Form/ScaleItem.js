// @flow
// @see https://developers.google.com/apps-script/reference/forms/scale-item#createResponse(Integer)

interface gas$Form$ScaleItem {
  createResponse(response: gas$Integer): gas$Form$ItemResponse;
  duplicate(): gas$Form$ScaleItem;
  getGeneralFeedback(): gas$Form$QuizFeedback;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getLeftLabel(): string;
  getLowerBound(): gas$Integer;
  getPoints(): gas$Integer;
  getRightLabel(): string;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  getUpperBound(): gas$Integer;
  isRequired(): boolean;
  setBounds(lower: gas$Integer, upper: gas$Integer): gas$Form$ScaleItem;
  setGeneralFeedback(feedback: gas$Form$QuizFeedback): gas$Form$ScaleItem;
  setHelpText(text: string): gas$Form$ScaleItem;
  setLabels(lower: string, upper: string): gas$Form$ScaleItem;
  setPoints(points: gas$Integer): gas$Form$ScaleItem;
  setRequired(enabled: boolean): gas$Form$ScaleItem;
  setTitle(title: string): gas$Form$ScaleItem;
}
