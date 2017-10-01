// @flow

interface gas$Document$FootnoteSection {
  appendParagraph(paragraph: gas$Document$Paragraph): gas$Document$Paragraph;
  appendParagraph(text: String): gas$Document$Paragraph;
  clear(): gas$Document$FootnoteSection;
  copy(): gas$Document$FootnoteSection;
  editAsText(): gas$Document$Text;
  findElement(elementType: gas$Document$ElementType): gas$Document$RangeElement;
  findElement(elementType: gas$Document$ElementType, from: gas$Document$RangeElement): gas$Document$RangeElement;
  findText(searchPattern: string): gas$Document$RangeElement;
  findText(searchPattern: string, from: gas$Document$RangeElement): gas$Document$RangeElement;
  getAttributes(): Object;
  getChild(childIndex: gas$Integer): gas$Document$Element;
  getChildIndex(child: gas$Document$Element): gas$Integer;
  getNextSibling(): gas$Document$Element;
  getNumChildren(): gas$Integer;
  getParagraphs(): gas$Document$Paragraph[];
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getText(): string;
  getTextAlignment(): gas$Document$TextAlignment;
  getType(): gas$Document$ElementType;
  insertParagraph(childIndex: gas$Integer, paragraph: gas$Document$Paragraph): gas$Document$Paragraph;
  insertParagraph(childIndex: gas$Integer, text: string): gas$Document$Paragraph;
  removeChild(child: gas$Document$Element): gas$Document$FootnoteSection;
  removeFromParent(): gas$Document$FootnoteSection;
  replaceText(searchPattern: string, replacement: string): gas$Document$Element;
  setAttributes(attributes: Object): gas$Document$FootnoteSection;
  setText(text: string): gas$Document$FootnoteSection;
  setTextAlignment(textAlignment: gas$Document$TextAlignment): gas$Document$FootnoteSection;
}
