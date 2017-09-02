// @flow
// @see https://developers.google.com/apps-script/reference/base/logger

interface gas$Logger {
  clear(): void;
  getLog(): string;
  log(data: Object): gas$Logger;
  log(format: string, ...values: Array<any>): gas$Logger;
}

declare var Logger: gas$Logger;
