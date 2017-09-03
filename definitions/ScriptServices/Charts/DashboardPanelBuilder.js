// @flow
// @see https://developers.google.com/apps-script/reference/charts/dashboard-panel-builder

interface gas$DashboardPanelBuilder {
  bind(control: gas$Control, chart: gas$Chart): gas$DashboardPanelBuilder;
  bind(controls: gas$Control[], charts: gas$Chart[]): gas$DashboardPanelBuilder;
  build(): gas$DashboardPanel;
  setDataTable(tableBuilder: gas$DataTableBuilder): gas$DashboardPanelBuilder;
  setDataTable(source: gas$DataTableSource): gas$DashboardPanelBuilder;
}
