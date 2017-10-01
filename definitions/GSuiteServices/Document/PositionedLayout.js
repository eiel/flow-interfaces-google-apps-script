// @flow
// @see https://developers.google.com/apps-script/reference/document/positioned-layout

opaque type gas$Document$PositionedLayout = any;

interface gas$Document$Enum$PositionedLayout {
  +ABOVE_TEXT: gas$Document$PositionedLayout;
  +BREAK_BOTH: gas$Document$PositionedLayout;
  +BREAK_LEFT: gas$Document$PositionedLayout;
  +BREAK_RIGHT: gas$Document$PositionedLayout;
  +WRAP_TEXT: gas$Document$PositionedLayout;
}
