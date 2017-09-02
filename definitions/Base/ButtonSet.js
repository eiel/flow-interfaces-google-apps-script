// @flow
// @see https://developers.google.com/apps-script/reference/base/button-set

opaque type gas$ButtonSet = any;

interface gas$Enum$ButtonSet {
  +OK: gas$ButtonSet;
  +OK_CANCEL: gas$ButtonSet;
  +YES_NO: gas$ButtonSet;
  +YES_NO_CANCEL: gas$ButtonSet;
}
