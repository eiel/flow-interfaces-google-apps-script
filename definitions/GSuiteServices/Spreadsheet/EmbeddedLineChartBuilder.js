// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder

interface gas$Spreadsheet$EmbeddedLineChartBuilder {
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
  reverseCategories(): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setBackgroundColor(cssValue: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setColors(cssValues: string[]): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setCurveStyle(style: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setLegendPosition(position: gas$Position): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setLegendTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPointStyle(style: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  setRange(start: number, end: number): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setTitle(chartTitle: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setXAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setXAxisTitle(title: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setXAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setYAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setYAxisTitle(title: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  setYAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedLineChartBuilder;
  useLogScale(): gas$Spreadsheet$EmbeddedLineChartBuilder;
}
