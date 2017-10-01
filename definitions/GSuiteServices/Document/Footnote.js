// @flow
// @see

interface gas$Document$Footnote {
  copy(): gas$Document$Footnote;
  getAttributes(): Object;
  getFootnoteContents(): gas$Document$FootnoteSection;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  removeFromParent(): gas$Document$Footnote;
  setAttributes(attributes: Object): gas$Document$Footnote;
}
