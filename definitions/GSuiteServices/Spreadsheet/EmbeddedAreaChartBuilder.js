// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder

interface gas$Spreadsheet$EmbeddedAreaChartBuilder {
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
  reverseCategories(): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setBackgroundColor(cssValue: string): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setColors(cssValues: string[]): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setLegendPosition(position: gas$Position): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setLegendTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPointStyle(style: gas$PointStyle): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  setRange(start: number, end: number): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setStacked(): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setTitle(chartTitle: string): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setTitleTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setXAxisTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setXAxisTitle(title: string): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setXAxisTitleTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setYAxisTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setYAxisTitle(title: string): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  setYAxisTitleTextStyle(textStyle: gas$TextStyle): gas$Spreadsheet$EmbeddedAreaChartBuilder;
  useLogScale(): gas$Spreadsheet$EmbeddedAreaChartBuilder;
}
