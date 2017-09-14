// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/element

interface gas$Element {
  addContent(content: gas$Content): gas$Element;
  addContent(index: number, content: gas$Content): gas$Element;
  cloneContent(): gas$Content[];
  detach(): gas$Content;
  getAllContent(): gas$Content[];
  getAttribute(name: string): gas$Attribute;
  getAttribute(name: string, namespace: gas$Namespace): gas$Attribute;
  getAttributes(): gas$Attribute[];
  getChild(name: string): gas$Element;
  getChild(name: string, namespace: gas$Namespace): gas$Element;
  getChildText(name: string): string;
  getChildText(name: string, namespace: gas$Namespace): string;
  getChildren(): gas$Element[];
  getChildren(name: string): gas$Element[];
  getChildren(name: string, namespace: gas$Namespace): gas$Element[];
  getContent(index: number): gas$Content;
  getContentSize(): number;
  getDescendants(): gas$Content[];
  getDocument(): gas$Document;
  getName(): string;
  getNamespace(): gas$Namespace;
  getNamespace(prefix: string): gas$Namespace;
  getParentElement(): gas$Element;
  getQualifiedName(): string;
  getText(): string;
  getValue(): string;
  isAncestorOf(other: gas$Element): boolean;
  isRootElement(): boolean;
  removeAttribute(attribute: gas$Attribute): boolean;
  removeAttribute(attributeName: string): boolean;
  removeAttribute(attributeName: string, namespace: gas$Namespace): boolean;
  removeContent(): gas$Content[];
  removeContent(content: gas$Content): boolean;
  removeContent(index: number): gas$Content;
  setAttribute(attribute: gas$Attribute): gas$Element;
  setAttribute(name: string, value: string): gas$Element;
  setAttribute(name: string, value: string, namespace: gas$Namespace): gas$Element;
  setName(name: string): gas$Element;
  setNamespace(namespace: gas$Namespace): gas$Element;
  setText(text: string): gas$Element;
}
