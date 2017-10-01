// @flow
// @see https://developers.google.com/apps-script/reference/document/element

interface gas$Document$Element {
  asBody(): gas$Document$Body;
  asEquation(): gas$Document$Equation;
  asEquationFunction(): gas$Document$EquationFunction;
  asEquationFunctionArgumentSeparator(): gas$Document$EquationFunctionArgumentSeparator;
  asEquationSymbol(): gas$Document$EquationSymbol;
  asFooterSection(): gas$Document$FooterSection;
  asFootnote(): gas$Document$Footnote;
  asFootnoteSection(): gas$Document$FootnoteSection;
  asHeaderSection(): gas$Document$HeaderSection;
  asHorizontalRule(): gas$Document$HorizontalRule;
  asInlineDrawing(): gas$Document$InlineDrawing;
  asInlineImage(): gas$Document$InlineImage;
  asListItem(): gas$Document$ListItem;
  asPageBreak(): gas$Document$PageBreak;
  asParagraph(): gas$Document$Paragraph;
  asTable(): gas$Document$Table;
  asTableCell(): gas$Document$TableCell;
  asTableOfContents(): gas$Document$TableOfContents;
  asTableRow(): gas$Document$TableRow;
  asText(): gas$Document$Text;
  copy(): gas$Document$Element;
  getAttributes(): Object;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  isAtDocumentEnd(): boolean;
  merge(): gas$Document$Element;
  removeFromParent(): gas$Document$Element;
  setAttributes(attributes: Object): gas$Document$Element;
}
