// @flow
// @see https://developers.google.com/apps-script/reference/calendar/recurrence-rule

interface gas$Calendar$RecurrenceRule {
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
  interval(interval: gas$Integer): gas$Calendar$RecurrenceRule;
  onlyInMonth(month: gas$Month): gas$Calendar$RecurrenceRule;
  onlyInMonths(months: gas$Month[]): gas$Calendar$RecurrenceRule;
  onlyOnMonthDay(day: gas$Integer): gas$Calendar$RecurrenceRule;
  onlyOnMonthDays(days: gas$Integer[]): gas$Calendar$RecurrenceRule;
  onlyOnWeek(week: gas$Integer): gas$Calendar$RecurrenceRule;
  onlyOnWeekday(day: gas$Weekday): gas$Calendar$RecurrenceRule;
  onlyOnWeekdays(days: gas$Weekday[]): gas$Calendar$RecurrenceRule;
  onlyOnWeeks(weeks: gas$Integer[]): gas$Calendar$RecurrenceRule;
  onlyOnYearDay(day: gas$Integer): gas$Calendar$RecurrenceRule;
  onlyOnYearDays(days: gas$Integer[]): gas$Calendar$RecurrenceRule;
  setTimeZone(timeZone: string): gas$Calendar$EventRecurrence;
  times(times: gas$Integer): gas$Calendar$RecurrenceRule;
  until(endDate: Date): gas$Calendar$RecurrenceRule;
  weekStartsOn(day: gas$Weekday): gas$Calendar$RecurrenceRule;
}
