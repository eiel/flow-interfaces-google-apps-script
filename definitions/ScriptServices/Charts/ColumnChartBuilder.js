// @flow
// @see https://developers.google.com/apps-script/reference/charts/column-chart-builder

interface gas$ColumnChartBuilder {
  build(): gas$Chart;
  reverseCategories(): gas$ColumnChartBuilder;
  setBackgroundColor(cssValue: string): gas$ColumnChartBuilder;
  setColors(cssValue: string): gas$ColumnChartBuilder;
  setDataSourceUrl(url: string): gas$ColumnChartBuilder;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$ColumnChartBuilder;
  setDataTable(table: gas$DataTableSource): gas$ColumnChartBuilder;
  setDataViewDefinition(dataViewDefinition: gas$DataViewDefinition): gas$ColumnChartBuilder;
  setDimensions(width: number, height: number): gas$ColumnChartBuilder;
  setLegendPosition(position: gas$Position): gas$ColumnChartBuilder;
  setLegendTextStyle(textStyle: gas$TextStyle): gas$ColumnChartBuilder;
  setOption(option: string, value: any): gas$ColumnChartBuilder;
  setRange(start: number, end: number): gas$ColumnChartBuilder;
  setStacked(): gas$ColumnChartBuilder;
  setTitle(chartTitle: string): gas$ColumnChartBuilder;
  setTitleTextStyle(textStyle: gas$TextStyle): gas$ColumnChartBuilder;
  setXAxisTextStyle(textStyle: gas$TextStyle): gas$ColumnChartBuilder;
  setXAxisTitle(title: string): gas$ColumnChartBuilder;
  setXAxisTitleTextStyle(textStyle: gas$TextStyle): gas$ColumnChartBuilder;
  setYAxisTextStyle(textStyle: gas$TextStyle): gas$ColumnChartBuilder;
  setYAxisTitle(title: string): gas$ColumnChartBuilder;
  setYAxisTitleTextStyle(textStyle: gas$TextStyle): gas$ColumnChartBuilder;
  useLogScale(): gas$ColumnChartBuilder;
}
