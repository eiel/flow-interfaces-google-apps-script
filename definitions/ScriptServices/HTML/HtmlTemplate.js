// @flow
// @see https://developers.google.com/apps-script/reference/html/html-template

interface gas$HtmlTemplate {
  evaluate(): gas$HtmlOutput;
  getCode(): string;
  getCodeWithComments(): string;
  getRawContent(): string;
}
