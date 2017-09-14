// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/processing-instruction

interface gas$ProcessingInstruction {
  detach(): gas$Content;
  getData(): string;
  getParentElement(): gas$Element;
  getTarget(): string;
  getValue(): string;
}
