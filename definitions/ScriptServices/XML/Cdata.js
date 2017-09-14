// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/cdata

interface gas$Cdata {
  append(text: string): gas$Text;
  detach(): gas$Content;
  getParentElement(): gas$Element;
  getText(): string;
  getValue(): string;
  setText(text: string): gas$Text;
}
