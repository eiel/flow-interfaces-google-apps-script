// @flow
// @see https://developers.google.com/apps-script/reference/calendar/guest-status

opaque type gas$Calendar$GuestStatus = any;

interface gas$Calendar$Enum$GuestStatus {
  +INVITED: gas$Calendar$GuestStatus;
  +MAYBE: gas$Calendar$GuestStatus;
  +NO: gas$Calendar$GuestStatus;
  +OWNER: gas$Calendar$GuestStatus;
  +YES: gas$Calendar$GuestStatus;
}
