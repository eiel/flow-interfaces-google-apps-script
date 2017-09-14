// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/document

interface gas$Document {
  addContent(content: string): gas$Document;
  addContent(index: number, content: string): gas$Document;
  cloneContent(): gas$Content[];
  detachRootElement(): gas$Element;
  getAllContent(): gas$Content[];
  getContent(index: number): gas$Content;
  getContentSize(): number;
  getDescendants(): gas$Content[];
  getDocType(): gas$DocType;
  getRootElement(): gas$Element;
  hasRootElement(): boolean;
  removeContent(): gas$Content[];
  removeContent(content: gas$Content): void;
  removeContent(index: number): void;
  setDocType(docType: gas$DocType): gas$Document;
  setRootElement(element: gas$Element): gas$Document;
}
