// @flow
// @see https://developers.google.com/apps-script/reference/gmail/gmail-attachment

interface gas$Gmail$GmailAttachment {
  copyBlob(): gas$Blob;
  getAs(contentType: gas$ContentType): gas$Blob;
  getBytes(): gas$Byte[];
  getContentType(): string;
  getDataAsString(): string;
  getDataAsString(charset: string): string;
  getName(): string;
  getSize(): gas$Integer;
  isGoogleType(): boolean;
  setBytes(data: gas$Byte[]): gas$Blob;
  setContentType(contentType: string): gas$Blob;
  setContentTypeFromExtension(): gas$Blob;
  setDataFromString(string: string): gas$Blob;
  setDataFromString(string: string, charset: string): gas$Blob;
  setName(name: string): gas$Blob;
}
