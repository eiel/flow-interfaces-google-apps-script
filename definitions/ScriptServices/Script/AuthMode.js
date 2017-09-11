// @flow
// @see https://developers.google.com/apps-script/reference/script/auth-mode

opaque type gas$AuthMode = any;

interface gas$Enum$AuthMode {
  +NONE: gas$AuthMode;
  +CUSTOM_FUNCTION: gas$AuthMode;
  +LIMITED: gas$AuthMode;
}
