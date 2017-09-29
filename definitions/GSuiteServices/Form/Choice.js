// @flow
// @see https://developers.google.com/apps-script/reference/forms/choice

interface gas$Form$Choice {
  getGotoPage(): gas$Form$PageBreakItem;
  getPageNavigationType(): gas$Form$PageNavigationType;
  getValue(): string;
  isCorrectAnswer(): boolean;
}
