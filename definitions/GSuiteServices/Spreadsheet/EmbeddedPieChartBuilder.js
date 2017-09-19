// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder

interface gas$Spreadsheet$EmbeddedPieChartBuilder {
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
  getChartType(): gas$ChartType;
  getContainer(): gas$Spreadsheet$ContainerInfo;
  getRanges(): gas$Spreadsheet$Range[];
  removeRange(range: gas$Spreadsheet$Range): gas$Spreadsheet$EmbeddedChartBuilder;
  reverseCategories(): gas$Spreadsheet$EmbeddedPieChartBuilder;
  set3D(): gas$Spreadsheet$EmbeddedPieChartBuilder;
  setBackgroundColor(cssValue: string): gas$Spreadsheet$EmbeddedPieChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setColors(cssValues: Object[]): gas$Spreadsheet$EmbeddedPieChartBuilder;
  setLegendPosition(position: gas$Document$Position): gas$Spreadsheet$EmbeddedPieChartBuilder;
  setLegendTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedPieChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  setTitle(chartTitle: string): gas$Spreadsheet$EmbeddedPieChartBuilder;
  setTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedPieChartBuilder;
}
