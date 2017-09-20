// @flow
// @see https://developers.google.com/apps-script/reference/calendar/calendar-event

interface gas$Calendar$CalendarEvent {
  addEmailReminder(minutesBefore: gas$Integer): gas$Calendar$CalendarEvent;
  addGuest(email: string): gas$Calendar$CalendarEvent;
  addPopupReminder(minutesBefore: gas$Integer): gas$Calendar$CalendarEvent;
  addSmsReminder(minutesBefore: gas$Integer): gas$Calendar$CalendarEvent;
  anyoneCanAddSelf(): boolean;
  deleteEvent(): void;
  deleteTag(key: string): gas$Calendar$CalendarEvent;
  getAllDayEndDate(): Date;
  getAllDayStartDate(): Date;
  getAllTagKeys(): string[];
  getColor(): string;
  getCreators(): string[];
  getDateCreated(): Date;
  getDescription(): string;
  getEmailReminders(): gas$Integer[];
  getEndTime(): Date;
  getEventSeries(): gas$Calendar$CalendarEventSeries;
  getGuestByEmail(email: string): gas$Calendar$EventGuest;
  getGuestList(): gas$Calendar$EventGuest[];
  getGuestList(includeOwner: boolean): gas$Calendar$EventGuest[];
  getId(): string;
  getLastUpdated(): Date;
  getLocation(): string;
  getMyStatus(): gas$Calendar$GuestStatus;
  getOriginalCalendarId(): string;
  getPopupReminders(): gas$Integer[];
  getSmsReminders(): gas$Integer[];
  getStartTime(): Date;
  getTag(key: string): string;
  getTitle(): string;
  getVisibility(): gas$Calendar$Visibility;
  guestsCanInviteOthers(): boolean;
  guestsCanModify(): boolean;
  guestsCanSeeGuests(): boolean;
  isAllDayEvent(): boolean;
  isOwnedByMe(): boolean;
  isRecurringEvent(): boolean;
  removeAllReminders(): gas$Calendar$CalendarEvent;
  removeGuest(email: string): gas$Calendar$CalendarEvent;
  resetRemindersToDefault(): gas$Calendar$CalendarEvent;
  setAllDayDate(date: Date): gas$Calendar$CalendarEvent;
  setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): gas$Calendar$CalendarEvent;
  setColor(color: string): gas$Calendar$CalendarEvent;
  setDescription(description: string): gas$Calendar$CalendarEvent;
  setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): gas$Calendar$CalendarEvent;
  setGuestsCanModify(guestsCanModify: boolean): gas$Calendar$CalendarEvent;
  setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): gas$Calendar$CalendarEvent;
  setLocation(location: string): gas$Calendar$CalendarEvent;
  setMyStatus(status: gas$Calendar$GuestStatus): gas$Calendar$CalendarEvent;
  setTag(key: string, value: string): gas$Calendar$CalendarEvent;
  setTime(startTime: Date, endTime: Date): gas$Calendar$CalendarEvent;
  setTitle(title: string): gas$Calendar$CalendarEvent;
  setVisibility(visibility: boolean): gas$Calendar$CalendarEvent
}
