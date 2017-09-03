// @flow
// @see https://developers.google.com/apps-script/reference/charts/area-chart-builder

interface gas$AreaChartBuilder {
  build(): gas$Chart;
  reverseCategories(): gas$AreaChartBuilder;
  setBackgroundColor(cssValue: string): gas$AreaChartBuilder;
  setColors(cssValue: string): gas$AreaChartBuilder;
  setDataSourceUrl(url: string): gas$AreaChartBuilder;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$AreaChartBuilder;
  setDataTable(table: gas$DataTableSource): gas$AreaChartBuilder;
  setDataViewDefinition(dataViewDefinition: gas$DataViewDefinition): gas$AreaChartBuilder;
  setDimensions(width: number, height: number): gas$AreaChartBuilder;
  setLegendPosition(position: gas$Position): gas$AreaChartBuilder;
  setLegendTextStyle(textStyle: gas$TextStyle): gas$AreaChartBuilder;
  setOption(option: string, value: any): gas$AreaChartBuilder;
  setPointStyle(style: gas$PointStyle): gas$AreaChartBuilder;
  setRange(start: number, end: number): gas$AreaChartBuilder;
  setStacked(): gas$AreaChartBuilder;
  setTitle(chartTitle: string): gas$AreaChartBuilder;
  setTitleTextStyle(textStyle: gas$TextStyle): gas$AreaChartBuilder;
  setXAxisTextStyle(textStyle: gas$TextStyle): gas$AreaChartBuilder;
  setXAxisTitle(title: string): gas$AreaChartBuilder;
  setXAxisTitleTextStyle(textStyle: gas$TextStyle): gas$AreaChartBuilder;
  setYAxisTextStyle(textStyle: gas$TextStyle): gas$AreaChartBuilder;
  setYAxisTitle(title: string): gas$AreaChartBuilder;
  setYAxisTitleTextStyle(textStyle: gas$TextStyle): gas$AreaChartBuilder;
  useLogScale(): gas$AreaChartBuilder;
}
