// @flow
// @see https://developers.google.com/apps-script/reference/script/authorization-status

opaque type gas$AuthorizationStatus = any;

interface gas$Enum$AuthorizationStatus {
  +REQUIRED: gas$AuthorizationStatus;
  +NOT_REQUIRED: gas$AuthorizationStatus;
}
