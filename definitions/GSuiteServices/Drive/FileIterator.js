// @flow
// @see https://developers.google.com/apps-script/reference/drive/file-iterator

interface gas$Drive$FileIterator {
  getContinuationToken(): string;
  hasNext(): boolean;
  next(): gas$Drive$File;
}
