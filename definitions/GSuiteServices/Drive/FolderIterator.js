// @flow
// @see https://developers.google.com/apps-script/reference/drive/folder-iterator

interface gas$Drive$FolderIterator {
  getContinuationToken(): string;
  hasNext(): boolean;
  next(): gas$Drive$Foleder;
}
