// @see https://developers.google.com/apps-script/reference/utilities/utilities

interface gas$Utilities {
  +Charset: gas$Enum$Charset;
  +DigestAlgorithm: gas$Enum$DigestAlgorithm;
  +MacAlgorithm: gas$Enum$MacAlgorithm;

  base64Decode(encoded: string): gas$Byte[];
  base64Decode(encoded: string, charset: gas$Charset): gas$Byte[];
  base64DecodeWebSafe(encoded: string): gas$Byte[];
  base64DecodeWebSafe(encoded: string, charset: gas$Charset): gas$Byte[];
  base64Encode(data: gas$Byte[]): string;
  base64Encode(data: string): string;
  base64Encode(data: gas$Byte[], charset: gas$Charset): string;
  base64EncodeWebSafe(data: gas$Byte[]): string;
  base64EncodeWebSafe(data: string): string;
  base64EncodeWebSafe(data: string, charset: gas$Charset): string;
  computeDigest(algorithm: gas$DigestAlgorithm, value: string): gas$Byte[];
  computeDigest(algorithm: gas$DigestAlgorithm, value: string, charset: gas$Charset): gas$Byte[];
  computeHmacSha256Signature(value: string, key: string): gas$Byte[];
  computeHmacSha256Signature(value: string, key: string, charset: gas$Charset): gas$Byte[];
  computeHmacSignature(algorithm: gas$MacAlgorithm, value: string, key: string): gas$Byte[];
  computeHmacSignature(algorithm: gas$MacAlgorithm, value: string, key: string, charset: gas$Charset): gas$Byte[];
  computeRsaSha256Signature(value: string, key: string): gas$Byte[];
  computeRsaSha256Signature(value: string, key: string, charset: gas$Charset): gas$Byte[];
  formatDate(date: Date, timeZone: string, format: string): string;
  formatString(template: string, ...args: any[]): string;
  getUuid(): String;
  newBlob(data: gas$Byte[]): gas$Blob;
  newBlob(data: gas$Byte[], contentType: string): gas$Blob;
  newBlob(data: gas$Byte[], contentType: string, name: string): gas$Blob;
  newBlob(data: string): gas$Blob;
  newBlob(data: string, contentType: string): gas$Blob;
  newBlob(data: string, contentType: string, name: string): gas$Blob;
  parseCsv(csv: string): string[][];
  parseCsv(csv: string, delimiter: string): string[][];
  sleep(milliseconds: number): void;
  unzip(blob: gas$Blob): gas$Blob[];
  zip(blobs: gas$BlobSource[]): gas$Blob;
  zip(blobs: gas$BlobSource[], name: string): gas$Blob;
}
