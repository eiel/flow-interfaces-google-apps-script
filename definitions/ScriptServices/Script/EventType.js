// @flow
// @see https://developers.google.com/apps-script/reference/script/event-type

opaque type gas$EventType = any;

interface gas$Enum$EventType {
  +CLOCK: gas$EventType;
  +ON_OPEN: gas$EventType;
  +ON_EDIT: gas$EventType;
  +ON_FORM_SUBMIT: gas$EventType;
  +ON_CHANGE: gas$EventType;
}
