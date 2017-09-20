// @flow
// @see https://developers.google.com/apps-script/reference/calendar/calendar-event-series

interface gas$Calendar$CalendarEventSeries {
  addEmailReminder(minutesBefore: gas$Integer): gas$Calendar$CalendarEventSeries;
  addGuest(email: string): gas$Calendar$CalendarEventSeries;
  addPopupReminder(minutesBefore: gas$Integer): gas$Calendar$CalendarEventSeries;
  addSmsReminder(minutesBefore: gas$Integer): gas$Calendar$CalendarEventSeries;
  anyoneCanAddSelf(): boolean;
  deleteEventSeries(): void;
  deleteTag(key: string): gas$Calendar$CalendarEventSeries;
  getAllTagKeys(): string[];
  getColor(): string;
  getCreators(): string[];
  getDateCreated(): Date;
  getDescription(): string;
  getEmailReminders(): gas$Integer[];
  getGuestByEmail(email: string): gas$Calendar$EventGuest;
  getGuestList(): gas$Calendar$EventGuest[];
  getGuestList(includeOwner: boolean): gas$Calendar$EventGuest[];
  getId():	string;
  getLastUpdated(): Date;
  getLocation(): string;
  getMyStatus(): gas$Calendar$EventGuest;
  getOriginalCalendarId(): string;
  getPopupReminders(): gas$Integer[];
  getSmsReminders(): gas$Integer[];
  getTag(key: string): string;
  getTitle(): string;
  getVisibility(): gas$Calendar$Visibility;
  guestsCanInviteOthers(): boolean;
  guestsCanModify(): boolean;
  guestsCanSeeGuests(): boolean;
  isOwnedByMe(): boolean;
  removeAllReminders(): gas$Calendar$CalendarEventSeries;
  removeGuest(email: string): gas$Calendar$CalendarEventSeries;
  resetRemindersToDefault(): gas$Calendar$CalendarEventSeries;
  setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): gas$Calendar$CalendarEventSeries;
  setColor(color: string): gas$Calendar$CalendarEventSeries;
  setDescription(description: string): gas$Calendar$CalendarEventSeries;
  setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): gas$Calendar$CalendarEventSeries;
  setGuestsCanModify(guestsCanModify: boolean): gas$Calendar$CalendarEventSeries;
  setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): gas$Calendar$CalendarEventSeries;
  setLocation(location: string): gas$Calendar$CalendarEventSeries;
  setMyStatus(status: gas$Calendar$GuestStatus): gas$Calendar$CalendarEventSeries;
  setRecurrence(recurrence: gas$Calendar$EventRecurrence, startDate: Date): gas$Calendar$CalendarEventSeries;
  setRecurrence(recurrence: gas$Calendar$EventRecurrence, startTime: Date, endTime: Date): gas$Calendar$CalendarEventSeries;
  setTag(key: string, value: string): gas$Calendar$CalendarEventSeries;
  setTitle(title: string): gas$Calendar$CalendarEventSeries;
  setVisibility(visibility: gas$Calendar$Visibility): gas$Calendar$CalendarEventSeries;
}
