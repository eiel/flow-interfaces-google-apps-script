// @flow
// @see https://developers.google.com/apps-script/reference/html/html-service

interface gas$HtmlService {
  +SandboxMode: gas$Enum$SandboxMode;
  +XFrameOptionMode: gas$Enum$XFrameOptionsMode;

  createHtmlOutput(): gas$HtmlOutput;
  createHtmlOutput(blob: gas$BlobSource): gas$HtmlOutput;
  createHtmlOutputFromFile(filename: string): gas$HtmlOutput;
  createTemplate(blob: gas$BlobSource): gas$HtmlTemplate;
  createTemplate(html: string): gas$HtmlTemplate;
  createTemplateFromFile(filename: string): gas$HtmlTemplate;
  getUserAgent(): string;
}
