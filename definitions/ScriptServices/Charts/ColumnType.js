// @flow
// @see https://developers.google.com/apps-script/reference/charts/column-type

opaque type gas$ColumnType = any;

interface gas$Enum$ColumnType {
  +DATE: gas$ColumnType;
  +NUMBER: gas$ColumnType;
  +STRING: gas$ColumnType;
}
