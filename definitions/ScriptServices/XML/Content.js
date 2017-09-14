// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/content

interface gas$Content {
  asCdata(): gas$Cdata;
  asComment(): gas$Comment;
  asDocType(): gas$DocType;
  asElement(): gas$Element;
  asEntityRef(): gas$EntityRef;
  asProcessingInstruction(): gas$ProcessingInstruction;
  asText(): gas$Text;
  detach(): gas$Content;
  getParentElement(): gas$Element;
  getType(): gas$ContentType;
  getValue(): string;
}
