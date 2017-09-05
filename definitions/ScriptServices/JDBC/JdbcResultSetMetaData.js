// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data

interface gas$JdbcResultSetMetaData {
  getCatalogName(column: number): string;
  getColumnClassName(column: number): string;
  getColumnCount(): number;
  getColumnDisplaySize(column: number): number;
  getColumnLabel(column: number): string;
  getColumnName(column: number): string;
  getColumnType(column: number): number;
  getColumnTypeName(column: number): string;
  getPrecision(column: number): number;
  getScale(column: number): number;
  getSchemaName(column: number): string;
  getTableName(column: number): string;
  isAutoIncrement(column: number): boolean;
  isCaseSensitive(column: number): boolean;
  isCurrency(column: number): boolean;
  isDefinitelyWritable(column: number): boolean;
  isNullable(column: number): number;
  isReadOnly(column: number): boolean;
  isSearchable(column: number): boolean;
  isSigned(column: number): boolean;
  isWritable(column: number): boolean;
}
