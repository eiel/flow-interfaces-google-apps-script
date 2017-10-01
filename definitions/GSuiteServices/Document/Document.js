// @flow
// @see https://developers.google.com/apps-script/reference/document/document

interface gas$Document$Document {
  addBookmark(position: gas$Document$Position): gas$Document$Bookmark;
  addEditor(emailAddress: string): gas$Document$Document;
  addEditor(user: gas$User): gas$Document$Document;
  addEditors(emailAddresses: string[]): gas$Document$Document;
  addFooter(): gas$Document$FooterSection;
  addHeader(): gas$Document$HeaderSection;
  addNamedRange(name: string, range: gas$Document$Range): gas$Document$NamedRange;
  addViewer(emailAddress: string): gas$Document$Document;
  addViewer(user: gas$User): gas$Document$Document;
  addViewers(emailAddresses: string[]): gas$Document$Document;
  getAs(contentType: 'application/pdf'): gas$Blob;
  getBlob(): gas$Blob;
  getBody(): gas$Document$Body;
  getBookmark(id: string): gas$Document$Bookmark;
  getBookmarks(): gas$Document$Bookmark[];
  getCursor(): gas$Document$Position;
  getEditors(): gas$User[];
  getFooter(): gas$Document$FooterSection;
  getFootnotes(): gas$Document$Footnote[];
  getHeader(): gas$Document$HeaderSection;
  getId(): string;
  getName(): string;
  getNamedRangeById(id: string): gas$Document$NamedRange;
  getNamedRanges(): gas$Document$NamedRange[];
  getNamedRanges(name: string): gas$Document$NamedRange[];
  getSelection(): gas$Document$Range;
  getUrl(): string;
  getViewers(): gas$User[];
  newPosition(element: gas$Document$Element, offset: gas$Integer): gas$Document$Position;
  newRange(): gas$Document$RangeBuilder;
  removeEditor(emailAddress: string): gas$Document$Document;
  removeEditor(user: gas$User): gas$Document$Document;
  removeViewer(emailAddress: string): gas$Document$Document;
  removeViewer(user: gas$User): gas$Document$Document;
  saveAndClose(): void;
  setCursor(position: gas$Document$Position): gas$Document$Document;
  setName(name: string): gas$Document$Document;
  setSelection(range: gas$Document$Range): gas$Document$Document;
}
