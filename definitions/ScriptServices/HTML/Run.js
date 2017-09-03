// @flow
// @seehttps://developers.google.com/apps-script/guides/html/reference/run

interface gas$Run {
  withFailureHandler(function: ((Error, ...args: any[]) => any)): void;
  withSuccessHandler(function: (...args: any[]) => any): void;
  withUserObject(object: Object): void;
}
