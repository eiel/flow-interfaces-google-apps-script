// @flow

interface gas$Calendar$Calendar {
  createAllDayEvent(title: string, date: Date): gas$Calendar$CalendarEvent;
  createAllDayEvent(title: string, date: Date, options: gas$Calendar$createEventOptions): gas$Calendar$CalendarEvent;
  createAllDayEventSeries(title: string, startDate: Date, recurrence: gas$Calendar$EventRecurrence): gas$Calendar$CalendarEventSeries;
  createAllDayEventSeries(title: string, startDate: Date, recurrence: gas$Calendar$EventRecurrence, options: gas$Calendar$createEventOptions): gas$Calendar$CalendarEventSeries;
  createEvent(title: string, startTime: Date, endTime: Date): gas$Calendar$CalendarEvent;
  createEvent(title: string, startTime: Date, endTime: Date, options: gas$Calendar$createEventOptions): gas$Calendar$CalendarEvent;
  createEventFromDescription(description: string): gas$Calendar$CalendarEvent;
  createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: gas$Calendar$EventRecurrence): gas$Calendar$CalendarEventSeries;
  createEventSeries(title: string, startTime: Date, endTime: Date, recurrence: gas$Calendar$EventRecurrence, options: gas$Calendar$createEventOptions): gas$Calendar$CalendarEventSeries;
  deleteCalendar(): void;
  getColor(): string;
  getDescription(): string;
  getEventSeriesById(iCalId: string): gas$Calendar$CalendarEventSeries;
  getEvents(startTime: Date, endTime: Date): gas$Calendar$CalendarEvent[];
  getEvents(startTime: Date, endTime: Date, options: gas$Calendar$getEventsOptions): gas$Calendar$CalendarEvent[];
  getEventsForDay(date: Date): gas$Calendar$CalendarEvent[];
  getEventsForDay(date: Date, options: gas$Calendar$getEventsOptions): gas$Calendar$CalendarEvent[];
  getId(): string;
  getName(): string;
  getTimeZone(): string;
  isHidden(): boolean;
  isMyPrimaryCalendar(): boolean;
  isOwnedByMe(): boolean;
  isSelected(): boolean;
  setColor(color: string): gas$Calendar$Calendar;
  setDescription(description: string): gas$Calendar$Calendar;
  setHidden(hidden: boolean): gas$Calendar$Calendar;
  setName(name: string): gas$Calendar$Calendar;
  setSelected(selected: boolean): gas$Calendar$Calendar;
  setTimeZone(timeZone: string): gas$Calendar$Calendar;
  unsubscribeFromCalendar(): void;
}
