// @flow
// @see https://developers.google.com/apps-script/reference/maps/format

opaque type gas$Maps$Format = any;

interface gas$Maps$Enum$Format {
  +PNG: gas$Maps$Format;
  +PNG8: gas$Maps$Format;
  +PNG32: gas$Maps$Format;
  +GIF: gas$Maps$Format;
  +JPG: gas$Maps$Format;
  +JPG_BASELINE: gas$Maps$Format;
}
