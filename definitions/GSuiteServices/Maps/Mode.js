// @flow
// @see https://developers.google.com/apps-script/reference/maps/mode

opaque type gas$Maps$Mode = any;

interface gas$Maps$Enum$Mode {
  +DRIVING: gas$Maps$Mode;
  +WALKING: gas$Maps$Mode;
  +BICYCLING: gas$Maps$Mode;
  +TRANSIT: gas$Maps$Mode;
}
