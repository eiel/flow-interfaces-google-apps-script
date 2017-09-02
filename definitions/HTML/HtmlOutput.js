// @flow
// @see https://developers.google.com/apps-script/reference/html/html-output

interface gas$HtmlOutput {
  addMetaTag(name: string, content: string): gas$HtmlOutput;
  append(addedContent: string): gas$HtmlOutput;
  appendUntrusted(addedContent: string): gas$HtmlOutput;
  asTemplate(): gas$HtmlTemplate;
  clear():  gas$HtmlOutput;
  getAs(contentType: gas$ContentType): gas$Blob;
  getBlob(): gas$Blob;
  getContent(): string;
  getFaviconUrl(): string;
  getHeight(): number;
  getMetaTags(): gas$HtmlOutputMetaTag[];
  getTitle(): string;
  getWidth(): number;
  setContent(content: string): gas$HtmlOutput;
  setFaviconUrl(iconUrl: string): gas$HtmlOutput;
  setHeight(height: number): gas$HtmlOutput;
  setSandboxMode(mode: gas$SandboxMode): gas$HtmlOutput;
  setTitle(title: string): gas$HtmlOutput;
  setWidth(width: number): gas$HtmlOutput;
  setXFrameOptionsMode(mode: gas$XFrameOptionsMode): gas$HtmlOutput;
}
