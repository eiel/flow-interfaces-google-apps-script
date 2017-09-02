// @flow
// @see https://developers.google.com/apps-script/reference/base/button

opaque type gas$Button = any;

interface gas$Enum$Button {
  +CLOSE: gas$Button;
  +OK: gas$Button;
  +CANCEL: gas$Button;
  +YES: gas$Button;
  +NO: gas$Button;
}
