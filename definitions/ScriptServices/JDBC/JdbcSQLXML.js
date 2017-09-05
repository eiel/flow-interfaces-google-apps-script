// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-sqlxml

interface gas$JdbcSQLXML {
  free(): void;
  getString(): string;
  setString(value: string): void;
}
