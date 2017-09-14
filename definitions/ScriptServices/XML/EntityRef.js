// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/entity-ref

interface gas$EntityRef {
  detach(): gas$Content;
  getName(): string;
  getParentElement(): gas$Element;
  getPublicId(): string;
  getSystemId(): string;
  getValue(): string;
  setName(name: string): gas$EntityRef;
  setPublicId(id: string): gas$EntityRef;
  setSystemId(id: string): gas$EntityRef;
}
