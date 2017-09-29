// @flow
// @see https://developers.google.com/apps-script/reference/forms/item

interface gas$Form$Item {
  asCheckboxGridItem(): gas$Form$CheckboxGridItem;
  asCheckboxItem(): gas$Form$CheckboxItem;
  asDateItem(): gas$Form$DateItem;
  asDateTimeItem(): gas$Form$DateTimeItem;
  asDurationItem(): gas$Form$DurationItem;
  asGridItem(): gas$Form$GridItem;
  asImageItem(): gas$Form$ImageItem;
  asListItem(): gas$Form$ListItem;
  asMultipleChoiceItem(): gas$Form$MultipleChoiceItem;
  asPageBreakItem(): gas$Form$PageBreakItem;
  asParagraphTextItem(): gas$Form$ParagraphTextItem;
  asScaleItem(): gas$Form$ScaleItem;
  asSectionHeaderItem(): gas$Form$SectionHeaderItem;
  asTextItem(): gas$Form$TextItem;
  asTimeItem(): gas$Form$TimeItem;
  asVideoItem(): gas$Form$VideoItem;
  duplicate(): gas$Form$Item;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  setHelpText(text: string): gas$Form$Item;
  setTitle(title: string): gas$Form$Item;
}
