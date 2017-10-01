// @flow
// @see https://developers.google.com/apps-script/reference/document/equation-function-argument-separator

interface gas$Document$EquationFunctionArgumentSeparator {
  copy(): gas$Document$EquationFunctionArgumentSeparator;
  getAttributes(): Object;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  merge(): gas$Document$EquationFunctionArgumentSeparator;
  removeFromParent(): gas$Document$EquationFunctionArgumentSeparator;
  setAttributes(attributes: Object): gas$Document$EquationFunctionArgumentSeparator;
}
