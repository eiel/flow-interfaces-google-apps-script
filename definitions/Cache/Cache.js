// @flow
// @see https://developers.google.com/apps-script/reference/cache/cache

interface Cache {
  get(key: string): ?string;
  put(key: string, value: string): void;
  putAll(values: Object): void;
  putAll(values: Object, expirationInSeconds: number): void;
  remove(key: string): void;
  removeAll(keys: string[]): void;
}
