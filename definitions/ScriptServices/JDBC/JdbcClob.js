// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-clob

interface gas$JdbcClob {
  free(): void;
  getAppsScriptBlob(): gas$Blob;
  getAs(contentType: gas$ContentType): gas$Blob;
  getSubString(position: number, length: number): string;
  length(): number;
  position(search: gas$JdbcClob, start: number): number;
  position(search: string, start: number): number;
  setString(position: number, blobSource: gas$BlobSource): void;
  setString(position: number, blobSource: gas$BlobSource, offset: number, len: number): void;
  setString(position: number, value: string): void;
  setString(position: number, value: string, offset: number, len: number): void;
  truncate(length: number): void;
  
}
