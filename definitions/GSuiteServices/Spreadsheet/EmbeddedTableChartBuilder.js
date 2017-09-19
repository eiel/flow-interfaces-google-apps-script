// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder

interface gas$Spreadsheet$EmbeddedTableChartBuilder {
  addRange(range: gas$Spreadsheet$Range): gas$Spreadsheet$EmbeddedChartBuilder;
  asAreaChart(): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  asBarChart(): gas$Spreadsheet$EmbeddedBarChartBuilder;
  asColumnChart(): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  asComboChart(): gas$Spreadsheet$EmbeddedComboChartBuilder;
  asHistogramChart(): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  asLineChart(): gas$Spreadsheet$EmbeddedLineChartBuilder;
  asPieChart(): gas$Spreadsheet$EmbeddedPieChartBuilder;
  asScatterChart(): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  asTableChart(): gas$Spreadsheet$EmbeddedTableChartBuilder;
  build(): gas$Spreadsheet$EmbeddedChart;
  enablePaging(enablePaging: boolean): gas$Spreadsheet$EmbeddedTableChartBuilder;
  enablePaging(pageSize: number): gas$Spreadsheet$EmbeddedTableChartBuilder;
  enablePaging(pageSize: number, startPage: number): gas$Spreadsheet$EmbeddedTableChartBuilder;
  enableRtlTable(rtlEnabled: boolean): gas$Spreadsheet$EmbeddedTableChartBuilder;
  enableSorting(enableSorting: boolean): gas$Spreadsheet$EmbeddedTableChartBuilder;
  getChartType(): gas$ChartType;
  getContainer(): gas$Spreadsheet$ContainerInfo;
  getRanges(): gas$Spreadsheet$Range[];
  removeRange(range: gas$Spreadsheet$Range): gas$Spreadsheet$EmbeddedChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setFirstRowNumber(number: number): gas$Spreadsheet$EmbeddedTableChartBuilder;
  setInitialSortingAscending(column: number): gas$Spreadsheet$EmbeddedTableChartBuilder;
  setInitialSortingDescending(column: number): gas$Spreadsheet$EmbeddedTableChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  showRowNumberColumn(showRowNumber: boolean): gas$Spreadsheet$EmbeddedTableChartBuilder;
  useAlternatingRowStyle(alternate: boolean): gas$Spreadsheet$EmbeddedTableChartBuilder;
}
