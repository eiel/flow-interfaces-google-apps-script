// @flow
// @see https://developers.google.com/apps-script/guides/html/reference/host

interface gas$Host {
  close(): void;
  editor: { focus(): void };
  setHeight(height: number): void;
  setWidth(width: number): void;
}
