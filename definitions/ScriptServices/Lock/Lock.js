// @flow
// @see https://developers.google.com/apps-script/reference/lock/lock

interface gas$Lock {
  hasLock(): boolean;
  releaseLock(): void;
  tryLock(timeoutInMillis: number): boolean;
  waitLock(timeoutInMillis: number): void;
}
