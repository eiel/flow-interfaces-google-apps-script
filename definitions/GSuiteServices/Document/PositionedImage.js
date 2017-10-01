// @flow
// @see https://developers.google.com/apps-script/reference/document/positioned-image

interface gas$Document$PositionedImage {
  getAs(contentType: gas$ContentType): gas$Blob;
  getBlob(): gas$Blob;
  getHeight(): gas$Integer;
  getId(): string;
  getLayout(): gas$Document$PositionedLayout;
  getLeftOffset(): number;
  getParagraph(): gas$Document$Paragraph;
  getTopOffset(): number;
  getWidth(): gas$Integer;
  setHeight(height: gas$Integer): gas$Document$PositionedImage;
  setLayout(layout: gas$Document$PositionedLayout): gas$Document$PositionedImage;
  setLeftOffset(offset: number): gas$Document$PositionedImage;
  setTopOffset(offset: number): gas$Document$PositionedImage;
  setWidth(width: gas$Integer): gas$Document$PositionedImage;
}
