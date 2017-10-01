// @flow
// @see https://developers.google.com/apps-script/reference/document/element-type

opaque type gas$Document$ElementType = any;

interface gas$Document$Enum$ElementType {
  +BODY_SECTION: gas$Document$ElementType;
  +COMMENT_SECTION: gas$Document$ElementType;
  +DOCUMENT: gas$Document$ElementType;
  +EQUATION: gas$Document$ElementType;
  +EQUATION_FUNCTION: gas$Document$ElementType;
  +EQUATION_FUNCTION_ARGUMENT_SEPARATOR: gas$Document$ElementType;
  +EQUATION_SYMBOL: gas$Document$ElementType;
  +FOOTER_SECTION: gas$Document$ElementType;
  +FOOTNOTE: gas$Document$ElementType;
  +FOOTNOTE_SECTION: gas$Document$ElementType;
  +HEADER_SECTION: gas$Document$ElementType;
  +HORIZONTAL_RULE: gas$Document$ElementType;
  +INLINE_DRAWING: gas$Document$ElementType;
  +INLINE_IMAGE: gas$Document$ElementType;
  +LIST_ITEM: gas$Document$ElementType;
  +PAGE_BREAK: gas$Document$ElementType;
  +PARAGRAPH: gas$Document$ElementType;
  +TABLE: gas$Document$ElementType;
  +TABLE_CELL: gas$Document$ElementType;
  +TABLE_OF_CONTENTS: gas$Document$ElementType;
  +TABLE_ROW: gas$Document$ElementType;
  +TEXT: gas$Document$ElementType;
  +UNSUPPORTED: gas$Document$ElementType;
}
