// @flow
// @see https://developers.google.com/apps-script/reference/xml-service/xml-service

interface gas$XmlService {
  +ContentTypes: gas$XML$ContentType;

  createCdata(text: string): gas$Cdata;
  createComment(text: string): gas$Comment;
  createDocType(elementName: string): gas$DocType;
  createDocType(elementName: string, systemId: string): gas$DocType;
  createDocType(elementName: string, publicId: string, systemId: string): gas$DocType;
  createDocument(): gas$Document;
  createDocument(rootElement: gas$Element): gas$Document;
  createElement(name: string): gas$Element;
  createElement(name: string, namespace: gas$Namespace): gas$Element;
  createText(text: string): gas$Text;
  getCompactFormat(): gas$Format;
  getNamespace(uri: string): gas$Namespace;
  getNamespace(prefix: string, uri: string): gas$Namespace;
  getNoNamespace(): gas$Namespace;
  getPrettyFormat(): gas$Format;
  getRawFormat(): gas$Format;
  getXmlNamespace(): gas$Namespace;
  parse(xml: string): gas$Document;
}

declare var XmlService: gas$XmlService;
