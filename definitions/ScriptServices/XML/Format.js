// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/format

interface gas$Format {
  format(document: gas$Document): string;
  format(element: gas$Element): string;
  setEncoding(encoding: string): gas$Format;
  setIndent(indent: string): gas$Format;
  setLineSeparator(separator: string): gas$Format;
  setOmitDeclaration(omitDeclaration: boolean): gas$Format;
  setOmitEncoding(omitEncoding: boolean): gas$Format;
}
