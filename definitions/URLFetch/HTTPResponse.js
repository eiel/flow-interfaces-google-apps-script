// @flow
// @see https://developers.google.com/apps-script/reference/url-fetch/http-response#getResponseCode()

declare class gas$HTTPResponse {
  getAllHeaders(): Object;
  getAs(contentType: gas$ContentType): Blob;
  getBlob(): Blob;
  getContent(): gas$Byte[];
  getContentText(): String;
  getContentText(charset: string): string;
  getHeaders(): gas$Headers;
  getResponseCode(): number;
}
