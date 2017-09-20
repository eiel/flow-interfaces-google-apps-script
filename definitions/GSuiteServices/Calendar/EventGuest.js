// @flow
// @see https://developers.google.com/apps-script/reference/calendar/event-guest

interface gas$Calendar$EventGuest {
  getAdditionalGuests(): gas$Integer;
  getEmail(): string;
  getGuestStatus(): gas$Calendar$GuestStatus;
  getName(): string;
}
