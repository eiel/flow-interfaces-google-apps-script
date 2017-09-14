// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/comment

interface gas$Comment {
  detach(): gas$Content;
  getParentElement(): gas$Element;
  getText(): string;
  getValue(): string;
  setText(text: string): gas$Comment;
}
