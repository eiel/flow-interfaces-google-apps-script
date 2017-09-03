// @flow
// @see https://developers.google.com/apps-script/reference/charts/bar-chart-builder

interface gas$BarChartBuilder {
  build(): gas$Chart;
  reverseCategories(): gas$BarChartBuilder;
  reverseDirection(): gas$BarChartBuilder;
  setBackgroundColor(cssValue: string): gas$BarChartBuilder;
  setColors(cssValue: string): gas$BarChartBuilder;
  setDataSourceUrl(url: string): gas$BarChartBuilder;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$BarChartBuilder;
  setDataTable(table: gas$DataTableSource): gas$BarChartBuilder;
  setDataViewDefinition(dataViewDefinition: gas$DataViewDefinition): gas$BarChartBuilder;
  setDimensions(width: number, height: number): gas$BarChartBuilder;
  setLegendPosition(position: gas$Position): gas$BarChartBuilder;
  setLegendTextStyle(textStyle: gas$TextStyle): gas$BarChartBuilder;
  setOption(option: string, value: any): gas$BarChartBuilder;
  setRange(start: number, end: number): gas$BarChartBuilder;
  setStacked(): gas$BarChartBuilder;
  setTitle(chartTitle: string): gas$BarChartBuilder;
  setTitleTextStyle(textStyle: gas$TextStyle): gas$BarChartBuilder;
  setXAxisTextStyle(textStyle: gas$TextStyle): gas$BarChartBuilder;
  setXAxisTitle(title: string): gas$BarChartBuilder;
  setXAxisTitleTextStyle(textStyle: gas$TextStyle): gas$BarChartBuilder;
  setYAxisTextStyle(textStyle: gas$TextStyle): gas$BarChartBuilder;
  setYAxisTitle(title: string): gas$BarChartBuilder;
  setYAxisTitleTextStyle(textStyle: gas$TextStyle): gas$BarChartBuilder;
  useLogScale(): gas$BarChartBuilder;
}
