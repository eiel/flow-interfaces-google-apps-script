// @flow
// @see https://developers.google.com/apps-script/reference/charts/table-chart-builder

interface gas$TableChartBuilder {
    build(): gas$Chart;
    enablePaging(enablePaging: true): gas$TableChartBuilder;
    enablePaging(pageSize: number): gas$TableChartBuilder;
    enablePaging(pageSize: number, startPage: number): gas$TableChartBuilder;
    enableRtlTable(rtlEnabled: boolean): gas$TableChartBuilder;
    enableSorting(enableSorting: boolean): gas$TableChartBuilder;
    setDataSourceUrl(url: string): gas$TableChartBuilder;
    setDataTable(tableBuilder: gas$DataTableBuilder): gas$TableChartBuilder;
    setDataTable(table: gas$DataTableSource): gas$TableChartBuilder;
    setDataViewDefinition(dataViewDefinition: gas$DataViewDefinition): gas$TableChartBuilder;
    setDimensions(width: number, height: number): gas$TableChartBuilder;
    setFirstRowNumber(number: number): gas$TableChartBuilder;
    setInitialSortingAscending(column: number): gas$TableChartBuilder;
    setInitialSortingDescending(column: number): gas$TableChartBuilder;
    setOption(option: string, value: Object): gas$TableChartBuilder;
    showRowNumberColumn(showRowNumber: boolean): gas$TableChartBuilder;
    useAlternatingRowStyle(alternate: boolean): gas$TableChartBuilder;
}
