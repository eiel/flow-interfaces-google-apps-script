// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-savepoint

interface gas$JdbcSavepoint {
  getSavepointId(): number;
  getSavepointName(): string;
}
