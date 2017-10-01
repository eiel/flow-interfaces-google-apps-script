// @flow
// @see https://developers.google.com/apps-script/reference/document/bookmark

interface gas$Document$Bookmark {
  getId(): string;
  getPosition(): gas$Document$Position;
  remove(): void;
}
