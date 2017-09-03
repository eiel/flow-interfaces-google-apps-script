// @flow
// @see https://developers.google.com/apps-script/reference/charts/data-table-builder

interface gas$DataTableBuilder {
  addColumn(type: gas$ColumnType, label: string): gas$DataTableBuilder;
  addRow(values: Object[]): gas$DataTableBuilder;
  build(): gas$DataTable;
  setValue(row: number, column: number, value: Object): gas$DataTableBuilder;
}
