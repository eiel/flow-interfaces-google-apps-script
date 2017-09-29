// @flow
// @see https://developers.google.com/apps-script/reference/forms/image-item

interface gas$Form$ImageItem {
  duplicate(): gas$Form$ImageItem;
  getAlignment(): gas$Form$Alignment;
  getHelpText(): string;
  getId(): gas$Integer;
  getImage(): gas$Blob;
  getIndex(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  getWidth(): gas$Integer;
  setAlignment(alignment: gas$Form$Alignment): gas$Form$ImageItem;
  setHelpText(text: string): gas$Form$ImageItem;
  setImage(image: gas$BlobSource): gas$Form$ImageItem;
  setTitle(title: string): gas$Form$ImageItem;
  setWidth(width: gas$Integer): gas$Form$ImageItem;
}
