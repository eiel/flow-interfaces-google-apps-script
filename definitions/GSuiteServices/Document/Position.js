// @flow
// @see https://developers.google.com/apps-script/reference/document/position

interface gas$Document$Position {
  getElement(): gas$Document$Element;
  getOffset(): gas$Integer;
  getSurroundingText(): gas$Document$Text;
  getSurroundingTextOffset(): gas$Integer;
  insertBookmark(): gas$Document$Bookmark;
  insertInlineImage(image: gas$BlobSource): gas$Document$InlineImage;
  insertText(text: string): gas$Document$Text;
}
