// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-blob

interface gas$JdbcBlob {
  free(): void;
  getAppsScriptBlob(): gas$Blob;
  getAs(contentType: gas$ContentType): gas$Blob;
  getBytes(position: number, lengeth: number): gas$Byte[]
}
