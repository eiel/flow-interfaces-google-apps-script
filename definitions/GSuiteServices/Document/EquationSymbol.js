// @flow
// @see https://developers.google.com/apps-script/reference/document/equation-symbol

interface gas$Document$EquationSymbol {
  copy(): gas$Document$EquationSymbol;
  getAttributes(): Object;
  getCode(): string;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  merge(): gas$Document$EquationSymbol;
  removeFromParent(): gas$Document$EquationSymbol;
  setAttributes(attributes: Object): gas$Document$EquationSymbol;
}
