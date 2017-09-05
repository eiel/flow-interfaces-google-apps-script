// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-time

interface gas$JdbcTime {
  after(when: gas$JdbcTime): boolean;
  before(when: gas$JdbcTime): boolean;
  getHours(): number;
  getMinutes(): number;
  getSeconds(): number;
  getTime(): number;
  setHours(hours: number): void;
  setMinutes(minutes: number): void;
  setSeconds(second: number): void;
  setTime(milliseconds: number): void;
}
