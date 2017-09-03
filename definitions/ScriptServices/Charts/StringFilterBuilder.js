// @flow
// @see https://developers.google.com/apps-script/reference/charts/string-filter-builder

interface gas$StringFilterBuilder {
    build(): gas$Control;
    setCaseSensitive(caseSensitive: boolean): gas$StringFilterBuilder;
    setDataTable(tableBuilder: gas$DataTableBuilder): gas$StringFilterBuilder;
    setDataTable(table: gas$DataTableSource): gas$StringFilterBuilder;
    setFilterColumnIndex(columnIndex: number): gas$StringFilterBuilder;
    setFilterColumnLabel(columnLabel: string): gas$StringFilterBuilder;
    setLabel(label: string): gas$StringFilterBuilder;
    setLabelSeparator(labelSeparator: string): gas$StringFilterBuilder;
    setLabelStacking(orientation: gas$Orientation): gas$StringFilterBuilder;
    setMatchType(matchType: gas$MatchType): gas$StringFilterBuilder;
    setRealtimeTrigger(realtimeTrigger: boolean): gas$StringFilterBuilder;
}
