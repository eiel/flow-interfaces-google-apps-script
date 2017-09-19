// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder

interface gas$Spreadsheet$EmbeddedColumnChartBuilder {
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
  reverseCategories(): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setBackgroundColor(cssValue: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setColors(cssValues: string[]): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setLegendPosition(position: gas$Position): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setLegendTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  setRange(start: number, end: number): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setStacked(): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setTitle(chartTitle: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setXAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setXAxisTitle(title: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setXAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setYAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setYAxisTitle(title: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  setYAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedColumnChartBuilder;
  useLogScale(): gas$Spreadsheet$EmbeddedColumnChartBuilder;
}
