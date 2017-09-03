// @flow
// @see https://developers.google.com/apps-script/reference/content/text-output

interface gas$TextOutput {
  append(addedContent: string): gas$TextOutput;
  clear(): gas$TextOutput;
  downloadAsFile(filename: string): gas$TextOutput;
  getContent(): string;
  getFileName(): string;
  getMimeType(): gas$Content$MimeType;
  setContent(content: string): gas$TextOutput;
  setMimeType(mimeType: gas$Content$MimeType): gas$TextOutput;
}
