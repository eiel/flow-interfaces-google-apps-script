// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder

interface gas$Spreadsheet$EmbeddedHistogramChartBuilder {
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
  reverseCategories(): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setBackgroundColor(cssValue: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setColors(cssValues: string[]): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setLegendPosition(position: gas$Document$Position): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setLegendTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  setRange(start: number, end: number): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setStacked(): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setTitle(chartTitle: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setXAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setXAxisTitle(title: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setXAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setYAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setYAxisTitle(title: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  setYAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
  useLogScale(): gas$Spreadsheet$EmbeddedHistogramChartBuilder;
}
