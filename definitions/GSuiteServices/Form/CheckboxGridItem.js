// @flow
// @see https://developers.google.com/apps-script/reference/forms/checkbox-grid-item

interface gas$Form$CheckboxGridItem {
  clearValidation(): gas$Form$CheckboxGridItem;
  createResponse(responses: string[][]): gas$Form$ItemResponse;
  duplicate(): gas$Form$CheckboxGridItem;
  getColumns(): string[];
  getHelpText(): string;
  getId(): gas$Integer;
  getIndex(): gas$Integer;
  getRows(): string[];
  getTitle(): string;
  getType(): gas$Form$ItemType;
  isRequired(): boolean;
  setColumns(columns: string[]): gas$Form$CheckboxGridItem;
  setHelpText(text: string): gas$Form$CheckboxGridItem;
  setRequired(enabled: boolean): gas$Form$CheckboxGridItem;
  setRows(rows: string[]): gas$Form$CheckboxGridItem;
  setTitle(title: string): gas$Form$CheckboxGridItem;
  setValidation(validation: gas$Form$CheckboxGridValidation): gas$Form$CheckboxGridItem;
}
