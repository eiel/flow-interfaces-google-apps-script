// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder

interface gas$Spreadsheet$EmbeddedScatterChartBuilder {
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
  setBackgroundColor(cssValue: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setChartType(type: gas$ChartType): gas$Spreadsheet$EmbeddedChartBuilder;
  setColors(cssValues: string[]): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setLegendPosition(position: gas$Document$Position): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setLegendTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setOption(option: string, value: Object): gas$Spreadsheet$EmbeddedChartBuilder;
  setPointStyle(style: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setPosition(anchorRowPos: number, anchorColPos: number, offsetX: number, offsetY: number): gas$Spreadsheet$EmbeddedChartBuilder;
  setTitle(chartTitle: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setXAxisLogScale(): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setXAxisRange(start: number, end: number): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setXAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setXAxisTitle(title: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setXAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setYAxisLogScale(): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setYAxisRange(start: number, end: number): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setYAxisTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setYAxisTitle(title: string): gas$Spreadsheet$EmbeddedScatterChartBuilder;
  setYAxisTitleTextStyle(textStyle: string): gas$Spreadsheet$EmbeddedScatterChartBuilder ;
}
