// @flow
// @see https://developers.google.com/apps-script/reference/charts/number-range-filter-builder

interface gas$NumberRangeFilterBuilder {
  build(): gas$Control;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$NumberRangeFilterBuilder;
  setDataTable(table: gas$DataTableSource): gas$NumberRangeFilterBuilder;
  setFilterColumnIndex(columnIndex: number): gas$NumberRangeFilterBuilder;
  setFilterColumnLabel(columnLabel: string): gas$NumberRangeFilterBuilder;
  setLabel(label: string): gas$NumberRangeFilterBuilder;
  setLabelSeparator(labelSeparator: string): gas$NumberRangeFilterBuilder;
  setLabelStacking(orientation: gas$Orientation): gas$NumberRangeFilterBuilder;
  setMaxValue(maxValue: number): gas$NumberRangeFilterBuilder;
  setMinValue(minValue: number): gas$NumberRangeFilterBuilder;
  setOrientation(orientation: gas$Orientation): gas$NumberRangeFilterBuilder;
  setShowRangeValues(showRangeValues: boolean): gas$NumberRangeFilterBuilder;
  setTicks(ticks: number): gas$NumberRangeFilterBuilder;
}
