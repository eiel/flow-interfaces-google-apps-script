// @flow
// @see https://developers.google.com/apps-script/guides/html/reference/history

interface gas$History$Event {
  +state: Object;
  +location: gas$Location;
}

interface gas$History {
  push(stateObject: Object, params: {[string]: string}, hash: string): void;
  replace(stateObject: Object, params: {[string]: string}, hash: string): void;
  setChangeHandler(function: (e: gas$History$Event) => any): void;
}
