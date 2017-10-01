// @flow
// @see https://developers.google.com/apps-script/reference/document/glyph-type

opaque type gas$Document$GlyphType = any;

interface gas$Document$Enum$GlyphType {
  +BULLET: gas$Document$GlyphType;
  +HOLLOW_BULLET: gas$Document$GlyphType;
  +SQUARE_BULLET: gas$Document$GlyphType;
  +NUMBER: gas$Document$GlyphType;
  +LATIN_UPPER: gas$Document$GlyphType;
  +LATIN_LOWER: gas$Document$GlyphType;
  +ROMAN_UPPER: gas$Document$GlyphType;
  +ROMAN_LOWER: gas$Document$GlyphType;
}
