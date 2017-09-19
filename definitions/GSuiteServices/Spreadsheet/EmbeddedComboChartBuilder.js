// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder

interface gas$Spreadsheet$EmbeddedComboChartBuilder {
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
  reverseCategories(): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setBackgroundColor(cssValue: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setColors(cssValues: string[]): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setLegendPosition(position: gas$Document$Position): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setLegendTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  setRange(start: number, end: number): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setStacked(): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setTitle(chartTitle: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setXAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setXAxisTitle(title: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setXAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setYAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setYAxisTitle(title: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  setYAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedComboChartBuilder;
  useLogScale(): gas$Spreadsheet$EmbeddedComboChartBuilder;
}
