// @flow
// @see https://developers.google.com/apps-script/reference/forms/page-break-item

interface gas$Form$PageBreakItem {
  duplicate(): gas$Form$PageBreakItem;
  getGoToPage(): gas$Form$PageBreakItem;
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getPageNavigationType(): gas$Form$PageNavigationType;
  getTitle(): string;
  getType(): gas$Form$ItemType;
  setGoToPage(goToPageItem: gas$Form$PageBreakItem): gas$Form$PageBreakItem;
  setGoToPage(navigationType: gas$Form$PageNavigationType): gas$Form$PageBreakItem;
  setHelpText(text: string): gas$Form$PageBreakItem;
  setTitle(title: string): gas$Form$PageBreakItem;
}
