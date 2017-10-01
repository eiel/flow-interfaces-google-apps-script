// @flow
// @see https://developers.google.com/apps-script/reference/document/table-of-contents

interface gas$Document$TableOfContents {
  clear(): gas$Document$TableOfContents;
  copy(): gas$Document$TableOfContents;
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
  removeFromParent(): gas$Document$TableOfContents;
  replaceText(searchPattern: string, replacement: string): gas$Document$Element;
  setAttributes(attributes: Object): gas$Document$TableOfContents;
  setLinkUrl(url: string): gas$Document$TableOfContents;
  setTextAlignment(textAlignment: gas$Document$TextAlignment): gas$Document$TableOfContents;
}
