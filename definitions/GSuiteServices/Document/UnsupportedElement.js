// @flow
// @see https://developers.google.com/apps-script/reference/document/unsupported-element

interface gas$Document$UnsupportedElement {
  copy(): gas$Document$UnsupportedElement;
  getAttributes(): Object;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  merge(): gas$Document$UnsupportedElement;
  removeFromParent(): gas$Document$UnsupportedElement;
  setAttributes(attributes: Object): gas$Document$UnsupportedElement;
}
