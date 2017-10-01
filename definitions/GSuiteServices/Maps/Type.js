// @flow
// @see https://developers.google.com/apps-script/reference/maps/type

opaque type gas$Maps$Type = any;

interface gas$Maps$Enum$Type {
  +ROADMAP: gas$Maps$Type;
  +SATELLITE: gas$Maps$Type;
  +TERRAIN: gas$Maps$Type;
  +HYBRID: gas$Maps$Type;
}
