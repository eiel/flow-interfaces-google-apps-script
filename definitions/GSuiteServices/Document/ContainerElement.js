// @flow
// @see https://developers.google.com/apps-script/reference/document/container-element

interface gas$Document$ContainerElement {
  asBody(): gas$Document$Body;
  asEquation(): gas$Document$Equation;
  asFooterSection(): gas$Document$FooterSection;
  asFootnoteSection(): gas$Document$FootnoteSection;
  asHeaderSection(): gas$Document$HeaderSection;
  asListItem(): gas$Document$ListItem;
  asParagraph(): gas$Document$Paragraph;
  asTable(): gas$Document$Table;
  asTableCell(): gas$Document$TableCell;
  asTableOfContents(): gas$Document$TableOfContents;
  asTableRow(): gas$Document$TableRow;
  clear(): gas$Document$ContainerElement;
  copy(): gas$Document$ContainerElement;
  editAsText(): gas$Document$Text;
  findElement(elementType: gas$Document$ElementType): gas$Document$RangeElement;
  findElement(elementType: gas$Document$ElementType, from: gas$Document$RangeElement): gas$Document$RangeElement;
  findText(searchPattern: string): gas$Document$RangeElement;
  findText(searchPattern: string, from: gas$Document$RangeElement): gas$Document$RangeElement;
  getAttributes(): Object;
  getChild(childIndex: gas$Integer): gas$Document$Element;
  getChildIndex(child: gas$Document$Element): gas$Integer;
  getLinkUrl(): string;
  getNextSibling(): gas$Document$Element;
  getNumChildren(): gas$Integer;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getText(): string;
  getTextAlignment(): gas$Document$TextAlignment;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  merge(): gas$Document$ContainerElement;
  removeFromParent(): gas$Document$ContainerElement;
  replaceText(searchPattern: string, replacement: string): gas$Document$Element;
  setAttributes(attributes: Object): gas$Document$ContainerElement;
  setLinkUrl(url: string): gas$Document$ContainerElement;
  setTextAlignment(textAlignment: gas$Document$TextAlignment): gas$Document$ContainerElement;
}
