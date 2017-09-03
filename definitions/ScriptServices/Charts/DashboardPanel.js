// @flow
// @see https://developers.google.com/apps-script/reference/charts/dashboard-panel

interface gas$DashboardPanel {
  getId(): string;
  getType(): string;
  setId(id: string): gas$DashboardPanel;
}
