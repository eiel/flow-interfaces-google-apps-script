// @flow
// @see https://developers.google.com/apps-script/reference/calendar/event-recurrence

interface gas$Calendar$EventRecurrence {
  addDailyExclusion(): gas$Calendar$RecurrenceRule;
  addDailyRule(): gas$Calendar$RecurrenceRule;
  addDate(date: Date): gas$Calendar$EventRecurrence;
  addDateExclusion(date: Date): gas$Calendar$EventRecurrence;
  addMonthlyExclusion(): gas$Calendar$RecurrenceRule;
  addMonthlyRule(): gas$Calendar$RecurrenceRule;
  addWeeklyExclusion(): gas$Calendar$RecurrenceRule;
  addWeeklyRule(): gas$Calendar$RecurrenceRule;
  addYearlyExclusion(): gas$Calendar$RecurrenceRule;
  addYearlyRule(): gas$Calendar$RecurrenceRule;
  setTimeZone(timeZone: string): gas$Calendar$EventRecurrence;
}
