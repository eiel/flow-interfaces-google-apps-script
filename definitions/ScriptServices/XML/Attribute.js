// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/attribute

interface gas$Attribute {
  getName(): string;
  getNamespace(): gas$Namespace;
  getValue(): string;
  setName(name: string): gas$Attribute;
  setNamespace(namespace: gas$Namespace): gas$Attribute;
  setValue(value: string): gas$Attribute;
}
