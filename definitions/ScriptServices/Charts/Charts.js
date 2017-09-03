// @flow
// @see https://developers.google.com/apps-script/reference/charts/charts

interface gas$Charts {
  +ChartType: gas$Enum$ChartType;
  +ColumnType: gas$Enum$ColumnType;
  +CurveStyle: gas$Enum$CurveStyle;
  +MatchType: gas$Enum$MatchType;
  +Orientation: gas$Enum$Orientation;
  +PickerValuesLayout: gas$Enum$PickerValuesLayout;
  +PointStyle: gas$Enum$PointStyle;
  +Position: gas$Enum$Position;

  newAreaChart(): gas$AreaChartBuilder;
  newBarChart(): gas$BarChartBuilder;
  newCategoryFilter(): gas$CategoryFilterBuilder;
  newColumnChart(): gas$ColumnChartBuilder;
  newDashboardPanel(): gas$DashboardPanelBuilder;
  newDataTable(): gas$DataTableBuilder;
  newDataViewDefinition(): gas$DataViewDefinitionBuilder;
  newLineChart(): gas$LineChartBuilder;
  newNumberRangeFilter(): gas$NumberRangeFilterBuilder;
  newPieChart(): gas$PieChartBuilder;
  newScatterChart(): gas$ScatterChartBuilder;
  newStringFilter(): gas$StringFilterBuilder;
  newTableChart(): gas$TableChartBuilder;
  newTextStyle(): gas$TextStyleBuilder;
}

declare var Charts: gas$Charts;
