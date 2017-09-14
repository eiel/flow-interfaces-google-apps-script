// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/doc-type

interface gas$DocType {
  detach(): gas$Content;
  getElementName(): string;
  getInternalSubset(): string;
  getParentElement(): gas$Element;
  getPublicId(): string;
  getSystemId(): string;
  getValue(): string;
  setElementName(name: string): gas$DocType;
  setInternalSubset(data: string): gas$DocType;
  setPublicId(id: string): gas$DocType;
  setSystemId(id: string): gas$DocType;
}
