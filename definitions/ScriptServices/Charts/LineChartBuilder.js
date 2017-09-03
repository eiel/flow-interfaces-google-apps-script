// @flow
// @see https://developers.google.com/apps-script/reference/charts/line-chart-builder

interface gas$LineChartBuilder {
  build(): gas$Chart;
  reverseCategories(): gas$LineChartBuilder;
  setBackgroundColor(cssValue: string): gas$LineChartBuilder;
  setColors(cssValue: string): gas$LineChartBuilder;
  setCurveStyle(style: gas$CurveStyle): gas$LineChartBuilder;
  setDataSourceUrl(url: string): gas$LineChartBuilder;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$LineChartBuilder;
  setDataTable(table: gas$DataTableSource): gas$LineChartBuilder;
  setDimensions(width: number, height: number): gas$LineChartBuilder;
  setLegendPosition(position: gas$Position): gas$LineChartBuilder;
  setLegendTextStyle(textStyle: gas$TextStyle): gas$LineChartBuilder;
  setOption(option: string, value: any): gas$LineChartBuilder;
  setPointStyle(style: gas$PointStyle): gas$LineChartBuilder;
  setRange(start: number, end: number): gas$LineChartBuilder;
  setTitle(chartTitle: string): gas$LineChartBuilder;
  setTitleTextStyle(textStyle: gas$TextStyle): gas$LineChartBuilder;
  setXAxisTextStyle(textStyle: gas$TextStyle): gas$LineChartBuilder;
  setXAxisTitle(title: string): gas$LineChartBuilder;
  setXAxisTitleTextStyle(textStyle: gas$TextStyle): gas$LineChartBuilder;
  setYAxisTextStyle(textStyle: gas$TextStyle): gas$LineChartBuilder;
  setYAxisTitle(title: string): gas$LineChartBuilder;
  setYAxisTitleTextStyle(textStyle: gas$TextStyle): gas$LineChartBuilder;
  useLogScale(): gas$LineChartBuilder;
}
