// @flow
// @see https://developers.google.com/apps-script/reference/charts/position

opaque type gas$Position = any;

interface gas$Enum$Position {
  +TOP: gas$Position;
  +RIGHT: gas$Position;
  +BOTTOM: gas$Position;
  +NONE: gas$Position;
}
