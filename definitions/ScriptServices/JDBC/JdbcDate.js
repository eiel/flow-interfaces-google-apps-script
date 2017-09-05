// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-date

interface gas$JdbcDate {
  after(when: gas$JdbcDate): boolean;
  before(when: gas$JdbcDate): boolean;
  getDate(): number;
  getMonth(): number;
  getTime(): number;
  getYear(): number;
  setDate(data: number): void;
  setMonth(month: number): void;
  setTime(milliseconds: number): void;
  setYear(year: number): void;
}
