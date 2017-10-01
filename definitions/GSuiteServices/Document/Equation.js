// @flow
// @see https://developers.google.com/apps-script/reference/document/equation

interface gas$Document$Equation {
  clear(): gas$Document$Equation;
  copy(): gas$Document$Equation;
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
  merge(): gas$Document$Equation;
  removeFromParent(): gas$Document$Equation;
  replaceText(searchPattern: string, replacement: string): gas$Document$Element;
  setAttributes(attributes: Object): gas$Document$Equation;
  setLinkUrl(url: string): gas$Document$Equation;
  setTextAlignment(textAlignment: gas$Document$TextAlignment): gas$Document$Equation;
}
