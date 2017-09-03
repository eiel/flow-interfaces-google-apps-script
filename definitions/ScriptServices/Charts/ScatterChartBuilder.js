// @flow
// @see https://developers.google.com/apps-script/reference/charts/scatter-chart-builder

interface gas$ScatterChartBuilder {
  build(): gas$Chart;
  setBackgroundColor(cssValue: string): gas$ScatterChartBuilder;
  setColors(cssValue: string): gas$ScatterChartBuilder;
  setDataSourceUrl(url: string): gas$ScatterChartBuilder;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$ScatterChartBuilder;
  setDataTable(table: gas$DataTableSource): gas$ScatterChartBuilder;
  setDataViewDefinition(dataViewDefinition: gas$DataViewDefinition): gas$ScatterChartBuilder;
  setDimensions(width: number, height: number): gas$ScatterChartBuilder;
  setLegendPosition(position: gas$Position): gas$ScatterChartBuilder;
  setLegendTextStyle(textStyle: gas$TextStyle): gas$ScatterChartBuilder;
  setOption(option: string, value: any): gas$ScatterChartBuilder;
  setPointStyle(style: gas$PointStyle): gas$ScatterChartBuilder;
  setTitle(chartTitle: string): gas$ScatterChartBuilder;
  setTitleTextStyle(textStyle: gas$TextStyle): gas$ScatterChartBuilder;
  setXAxisTextStyle(textStyle: gas$TextStyle): gas$ScatterChartBuilder;
  setXAxisTitle(title: string): gas$ScatterChartBuilder;
  setXAxisTitleTextStyle(textStyle: gas$TextStyle): gas$ScatterChartBuilder;
  setYAxisTextStyle(textStyle: gas$TextStyle): gas$ScatterChartBuilder;
  setYAxisTitle(title: string): gas$ScatterChartBuilder;
  setYAxisTitleTextStyle(textStyle: gas$TextStyle): gas$ScatterChartBuilder;
}
