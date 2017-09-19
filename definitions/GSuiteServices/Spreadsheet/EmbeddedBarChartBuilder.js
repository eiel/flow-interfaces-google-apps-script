// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder

interface gas$Spreadsheet$EmbeddedBarChartBuilder {
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
  reverseCategories(): gas$Spreadsheet$EmbeddedBarChartBuilder;
  reverseDirection(): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setBackgroundColor(cssValue: string): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setColors(cssValues: string[]): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setLegendPosition(position: gas$Position): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setLegendTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  setRange(start: number, end: number): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setStacked(): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setTitle(chartTitle: string): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setTitleTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setXAxisTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setXAxisTitle(title: string): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setXAxisTitleTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setYAxisTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setYAxisTitle(title: string): gas$Spreadsheet$EmbeddedBarChartBuilder;
  setYAxisTitleTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedBarChartBuilder;
  useLogScale(): gas$Spreadsheet$EmbeddedBarChartBuilder;
}
