// @flow
// @see https://developers.google.com/apps-script/reference/script/clock-trigger-builder

interface gas$ClockTriggerBuilder {
  after(durationMilliseconds: number): gas$ClockTriggerBuilder;
  at(date: Date): gas$ClockTriggerBuilder;
  atDate(year: number, month: number, day: number): gas$ClockTriggerBuilder;
  atHour(hour: number): gas$ClockTriggerBuilder;
  create(): gas$Trigger;
  everyDays(n: number): gas$ClockTriggerBuilder;
  everyHours(n: number): gas$ClockTriggerBuilder;
  everyMinutes(n: number): gas$ClockTriggerBuilder;
  everyWeeks(n: number): gas$ClockTriggerBuilder;
  inTimezone(timezone: string): gas$ClockTriggerBuilder;
  nearMinute(minute: number): gas$ClockTriggerBuilder;
  onMonthDay(day: number): gas$ClockTriggerBuilder;
  onWeekDay(day: number): gas$ClockTriggerBuilder;
}
