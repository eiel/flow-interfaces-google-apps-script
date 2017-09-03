// @flow
// @see https://developers.google.com/apps-script/reference/charts/chart-type

opaque type gas$ChartType = any;

interface gas$Enum$ChartType {
  +AREA: gas$ChartType;
  +BAR: gas$ChartType;
  +COLUMN: gas$ChartType;
  +COMBO: gas$ChartType;
  +HISTOGRAM	: gas$ChartType;
  +LINE: gas$ChartType;
  +PIE: gas$ChartType;
  +SCATTER: gas$ChartType;
  +TABLE: gas$ChartType;
}
