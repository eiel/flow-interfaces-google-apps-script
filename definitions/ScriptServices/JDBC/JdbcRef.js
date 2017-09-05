// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-ref

interface gas$JdbcRef {
  getBaseTypeName(): string;
  getObject(): Object;
  setObject(object: Object): void;
}
