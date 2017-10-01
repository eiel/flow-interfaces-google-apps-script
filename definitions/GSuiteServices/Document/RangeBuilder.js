// @flow
// @see https://developers.google.com/apps-script/reference/document/range-builder

interface gas$Document$RangeBuilder {
  addElement(element: gas$Document$Element): gas$Document$RangeBuilder;
  addElement(textElement: gas$Document$Text, startOffset: gas$Integer, endOffsetInclusive: gas$Integer): gas$Document$RangeBuilder;
  addElementsBetween(startElement: gas$Document$Element, endElementInclusive: gas$Document$Element): gas$Document$RangeBuilder;
  addElementsBetween(startTextElement: gas$Document$Text, startOffset: gas$Integer, endTextElementInclusive: gas$Document$Text, endOffsetInclusive: gas$Integer): gas$Document$RangeBuilder;
  addRange(range: gas$Document$Range): gas$Document$RangeBuilder;
  build(): gas$Document$Range;
  getRangeElements(): gas$Document$RangeElement[];
}
