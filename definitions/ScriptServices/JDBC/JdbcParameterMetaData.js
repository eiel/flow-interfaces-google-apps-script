// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-parameter-meta-data

interface gas$JdbcParameterMetaData {
  getParameterClassName(param: number): string;
  getParameterCount(): number;
  getParameterMode(param: number): number;
  getParameterType(param: number): number;
  getParameterTypeName(param: number): string;
  getPrecision(param: number): number;
  getScale(param: number): number;
  isNullable(param: number): number;
  isSigned(param: number): boolean;
}
