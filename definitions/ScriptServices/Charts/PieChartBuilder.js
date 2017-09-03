// @flow
// @see https://developers.google.com/apps-script/reference/charts/pie-chart-builder

interface gas$PieChartBuilder {
  build(): gas$Chart;
  reverseCategories(): gas$PieChartBuilder;
  get3D(): gas$PieChartBuilder;
  setBackgroundColor(cssValue: string): gas$PieChartBuilder;
  setColors(cssValue: string): gas$PieChartBuilder;
  setDataSourceUrl(url: string): gas$PieChartBuilder;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$PieChartBuilder;
  setDataTable(table: gas$DataTableSource): gas$PieChartBuilder;
  setDataViewDefinition(dataViewDefinition: gas$DataViewDefinition): gas$PieChartBuilder;
  setDimensions(width: number, height: number): gas$PieChartBuilder;
  setLegendPosition(position: gas$Position): gas$PieChartBuilder;
  setLegendTextStyle(textStyle: gas$TextStyle): gas$PieChartBuilder;
  setOption(option: string, value: any): gas$PieChartBuilder;
  setTitle(chartTitle: string): gas$PieChartBuilder;
  setTitleTextStyle(textStyle: gas$TextStyle): gas$PieChartBuilder;
}
