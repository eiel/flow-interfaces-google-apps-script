// @flow
// @see https://developers.google.com/apps-script/reference/calendar/calendar-app

interface gas$Calendar$createAllDayEventSeriesOptions {
  title?: string;
  startDate?: Date;
  recurrence?: gas$Calendar$EventRecurrence;
  options?: Object;
}

interface gas$Calendar$createCalendarOptions {
  location?: string;
  summary?: string;
  timeZone?: string;
  color?: string;
  hidden?: boolean;
  selected?: boolean;
}

interface gas$Calendar$createEventOptions {
  description?: string;
  location?: string;
  guests?: string;
  sendInvites?: boolean;
}

interface gas$Calendar$getEventsOptions {
  start?: number;
  max?: number;
  author?: string;
  search?: string;
  statusFilters?: gas$Calendar$GuestStatus[];
}

interface gas$Calendar$subscribeToCalendarOptions {
  color?: string;
  hidden?: boolean;
  selected?: boolean;
}

interface gas$Calendar$CalendarApp {
  createAllDayEvent(title: string, date: Date): gas$Calendar$CalendarEvent;
  createAllDayEvent(title: string, date: Date, options: Object): gas$Calendar$CalendarEvent;
  createAllDayEventSeries( title: string, startDate: Date, recurrence: gas$Calendar$EventRecurrence): gas$Calendar$CalendarEventSeries;
  createAllDayEventSeries( title: string, startDate: Date, recurrence: gas$Calendar$EventRecurrence, options: gas$Calendar$createAllDayEventSeriesOptions): gas$Calendar$CalendarEventSeries;
  createCalendar(name: string): gas$Calendar$Calendar;
  createCalendar(name: string, options: gas$Calendar$createCalendarOptions): gas$Calendar$Calendar;
  createEvent(title: string, startTime: Date, endTime: Date): gas$Calendar$CalendarEvent;
  createEvent(title: string, startTime: Date, endTime: Date, options: gas$Calendar$createEventOptions): gas$Calendar$CalendarEvent;
  createEventFromDescription(description: string): gas$Calendar$CalendarEvent;
  createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: gas$Calendar$EventRecurrence): gas$Calendar$CalendarEventSeries;
  createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: gas$Calendar$EventRecurrence, options: gas$Calendar$createEventOptions): gas$Calendar$CalendarEventSeries;
  getAllCalendars(): gas$Calendar$Calendar[];
  getAllOwnedCalendars(): gas$Calendar$Calendar[];
  getCalendarById(id: string): gas$Calendar$Calendar;
  getCalendarsByName(name: string): gas$Calendar$Calendar[];
  getColor(): string;
  getDefaultCalendar(): gas$Calendar$Calendar;
  getDescription(): string;
  getEventSeriesById(iCalId: string): gas$Calendar$CalendarEventSeries;
  getEvents(startTime: Date, endTime: Date): gas$Calendar$CalendarEvent[];
  getEvents(startTime: Date, endTime: Date, options: gas$Calendar$getEventsOptions): gas$Calendar$CalendarEvent[];
  getEventsForDay(date: Date): gas$Calendar$CalendarEvent[];
  getEventsForDay(date: Date, options: gas$Calendar$getEventsOptions): gas$Calendar$CalendarEvent[];
  getId(): string;
  getName(): string;
  getOwnedCalendarById(id: string): gas$Calendar$Calendar;
  getOwnedCalendarsByName(name: string): gas$Calendar$Calendar[];
  getTimeZone(): string;
  isHidden(): boolean;
  isMyPrimaryCalendar(): boolean;
  isOwnedByMe(): boolean;
  isSelected(): boolean;
  newRecurrence(): gas$Calendar$EventRecurrence;
  setColor(color: string): gas$Calendar$Calendar;
  setDescription(description: string): gas$Calendar$Calendar;
  setHidden(hidden: boolean): gas$Calendar$Calendar;
  setName(name: string): gas$Calendar$Calendar;
  setSelected(selected: boolean): gas$Calendar$Calendar;
  setTimeZone(timeZone: string): gas$Calendar$Calendar;
  subscribeToCalendar(id: string): gas$Calendar$Calendar;
  subscribeToCalendar(id: string, options: gas$Calendar$subscribeToCalendarOptions): gas$Calendar$Calendar;
}

declare var CalendarApp: gas$Calendar$CalendarApp;
