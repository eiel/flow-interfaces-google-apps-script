// @flow
// @see https://developers.google.com/apps-script/reference/forms/video-item

interface gas$Form$VideoItem {
  uplicate(): gas$Form$VideoItem;
  getAlignment(): gas$Form$Alignment;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  getWidth(): gas$Integer;
  setAlignment(alignment: gas$Form$Alignment): gas$Form$VideoItem;
  setHelpText(text: string): gas$Form$VideoItem;
  setTitle(title: string): gas$Form$VideoItem;
  setVideoUrl(youtubeUrl: string): gas$Form$VideoItem;
  setWidth(width: gas$Integer): gas$Form$VideoItem;
}
