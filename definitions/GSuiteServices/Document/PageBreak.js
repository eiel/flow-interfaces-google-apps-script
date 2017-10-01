// @flow
// @see https://developers.google.com/apps-script/reference/document/page-break

interface gas$Document$PageBreak {
  copy(): gas$Document$PageBreak;
  getAttributes(): Object;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  removeFromParent(): gas$Document$PageBreak;
  setAttributes(attributes: Object): gas$Document$PageBreak;
}
