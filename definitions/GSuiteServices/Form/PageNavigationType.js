// @flow
// @see https://developers.google.com/apps-script/reference/forms/page-navigation-type

opaque type gas$Form$Enum$PageNavigationType = any;

interface gas$Form$PageNavigationType {
  +CONTINUE: gas$Form$Enum$PageNavigationType;
  +GO_TO_PAGE: gas$Form$Enum$PageNavigationType;
  +RESTART: gas$Form$Enum$PageNavigationType;
  +SUBMIT: gas$Form$Enum$PageNavigationType;
}
