// @flow
// @see https://developers.google.com/apps-script/reference/document/named-range

interface gas$Document$NamedRange {
  getId(): string;
  getName(): string;
  getRange(): gas$Document$Range;
  remove(): void;
}
