// @flow
// @see https://developers.google.com/apps-script/reference/forms/section-header-item

interface gas$Form$SectionHeaderItem {
  duplicate(): gas$Form$SectionHeaderItem;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  setHelpText(text: string): gas$Form$SectionHeaderItem;
  setTitle(title: string): gas$Form$SectionHeaderItem;
}
