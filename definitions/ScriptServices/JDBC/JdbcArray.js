// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-array

interface gas$JdbcArray {
  free(): void;
  getArray(): Object;
  getArray(index: number, count: number): Object;
  getBaseType(): number;
  getBaseTypeName(): string;
  getResultSet(): gas$JdbcResultSet;
  getResultSet(index: number, count: number): gas$JdbcResultSet;
  length(): number;
  position(pattern: gas$Byte[], start: number): number;
  position(pattern: gas$JdbcBlob, start: number): number;
  setBytes(position: number, blobSource: gas$BlobSource): number;
  setBytes(position: number, blobSource: gas$BlobSource, offset: number, length: number): number;
  setBytes(position: number, bytes: gas$Byte[]): number;
  setBytes(position: number, bytes: gas$Byte[], offset: number, length: number): number;
  truncate(length: number): void;
}
