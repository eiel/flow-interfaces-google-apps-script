// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-timestamp

interface gas$JdbcTimestamp {
  after(when: gas$JdbcTimestamp): boolean;
  before(when: gas$JdbcTimestamp): boolean;
  getDate(): number;
  getHours(): number;
  getMinutes(): number;
  getMonth(): number;
  getNanos(): number;
  getSeconds(): number;
  getTime(): number;
  getYear(): number;
  setDate(date: number): void;
  setHours(hours: number): void;
  setMinutes(minutes: number): void;
  setMonth(month: number): void;
  setNanos(nanoseconds: number): void;
  setSeconds(seconds: number): void;
  setTime(milliseconds: number): void;
  setYear(year: number): void;
}
