// @flow
// @see https://developers.google.com/apps-script/reference/document/range-element

interface gas$Document$RangeElement {
  getElement(): gas$Document$Element;
  getEndOffsetInclusive(): gas$Integer;
  getStartOffset(): gas$Integer;
  isPartial(): boolean;
}
