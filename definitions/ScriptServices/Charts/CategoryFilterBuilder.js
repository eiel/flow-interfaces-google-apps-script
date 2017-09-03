// @flow
// @see https://developers.google.com/apps-script/reference/charts/category-filter-builder

interface gas$CategoryFilterBuilder {
  build(): gas$Control;
  setAllowMultiple(allowMultiple: boolean): gas$CategoryFilterBuilder;
  setAllowNone(allowNone: boolean): gas$CategoryFilterBuilder;
  setAllowTyping(allowTyping: boolean): gas$CategoryFilterBuilder;
  setCaption(caption: string): gas$CategoryFilterBuilder;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$CategoryFilterBuilder;
  setDataTable(table: gas$DataTableSource): gas$CategoryFilterBuilder;
  setFilterColumnIndex(columnIndex: number): gas$CategoryFilterBuilder;
  setFilterColumnLabel(columnLabel: string): gas$CategoryFilterBuilder;
  setLabel(label: string): gas$CategoryFilterBuilder;
  setLabelSeparator(labelSeparator: string): gas$CategoryFilterBuilder;
  setLabelStacking(orientation: gas$Orientation): gas$CategoryFilterBuilder;
  setSelectedValuesLayout(layout: gas$PickerValuesLayout): gas$CategoryFilterBuilder;
  setSortValues(sortValues: boolean): gas$CategoryFilterBuilder;
  setValues(values: string[]): gas$CategoryFilterBuilder;
}
