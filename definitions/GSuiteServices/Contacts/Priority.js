// @flow
// @see https://developers.google.com/apps-script/reference/contacts/priority

opaque type gas$Contacts$Priority = any;

interface gas$Contacts$Enum$Priority {
  +HIGH: gas$Contacts$Priority;
  +LOW: gas$Contacts$Priority;
  +NORMAL: gas$Contacts$Priority;
}
