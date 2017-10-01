// @flow
// @see https://developers.google.com/apps-script/reference/document/inline-drawing

interface gas$Document$InlineDrawing {
  copy(): gas$Document$InlineDrawing;
  getAltDescription(): string;
  getAltTitle(): string;
  getAttributes(): Object;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  merge(): gas$Document$InlineDrawing;
  removeFromParent(): gas$Document$InlineDrawing;
  setAltDescription(description: string): gas$Document$InlineDrawing;
  setAltTitle(title: string): gas$Document$InlineDrawing;
  setAttributes(attributes: Object): gas$Document$InlineDrawing;
}
