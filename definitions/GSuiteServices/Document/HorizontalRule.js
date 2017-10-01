// @flow
// @see https://developers.google.com/apps-script/reference/document/horizontal-rule

interface gas$Document$HorizontalRule {
  copy(): gas$Document$HorizontalRule;
  getAttributes(): Object;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  removeFromParent(): gas$Document$HorizontalRule;
  setAttributes(attributes: Object): gas$Document$HorizontalRule;
}
