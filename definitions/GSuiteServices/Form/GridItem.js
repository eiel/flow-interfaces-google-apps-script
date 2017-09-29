// @flow
// @see https://developers.google.com/apps-script/reference/forms/grid-item

interface gas$Form$GridItem {
  clearValidation(): gas$Form$GridItem;
  createResponse(responses: string[]): gas$Form$ItemResponse;
  duplicate(): gas$Form$GridItem;
  getColumns(): string[];
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getRows(): string[];
  getTitle(): string;
  getType(): gas$Form$ItemType;
  isRequired(): boolean;
  setColumns(columns: string[]): gas$Form$GridItem;
  setHelpText(text: string): gas$Form$GridItem;
  setRequired(enabled: boolean): gas$Form$GridItem;
  setRows(rows: string): gas$Form$GridItem;
  setTitle(title: string): gas$Form$GridItem;
  setValidation(validation: gas$Form$GridValidation): gas$Form$GridItem;
}
