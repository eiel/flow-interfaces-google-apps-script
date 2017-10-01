// @flow
// @see https://developers.google.com/apps-script/reference/document/inline-image

interface gas$Document$InlineImage {
  copy(): gas$Document$InlineImage;
  getAltDescription(): string;
  getAltTitle(): string;
  getAs(contentType: gas$ContentType): gas$Blob;
  getAttributes(): Object;
  getBlob(): gas$Blob;
  getHeight(): gas$Integer;
  getLinkUrl(): string;
  getNextSibling(): gas$Document$Element;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getType(): gas$Document$ElementType;
  getWidth(): gas$Integer;
  isAtDocumentEnd(): boolean;
  merge(): gas$Document$InlineImage;
  removeFromParent(): gas$Document$InlineImage;
  setAltDescription(description: string): gas$Document$InlineImage;
  setAltTitle(title: string): gas$Document$InlineImage;
  setAttributes(attributes: Object): gas$Document$InlineImage;
  setHeight(height: gas$Integer): gas$Document$InlineImage;
  setLinkUrl(url: string): gas$Document$InlineImage;
  setWidth(width: gas$Integer): gas$Document$InlineImage;
}
