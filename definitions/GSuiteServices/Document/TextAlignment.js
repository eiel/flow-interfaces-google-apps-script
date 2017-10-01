// @flow
// @see https://developers.google.com/apps-script/reference/document/text-alignment

opaque type gas$Document$TextAlignment = any;

interface gas$Document$Enum$TextAlignment {
  +NORMAL: gas$Document$TextAlignment;
  +SUPERSCRIPT: gas$Document$TextAlignment;
  +SUBSCRIPT: gas$Document$TextAlignment;
}
