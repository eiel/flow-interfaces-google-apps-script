// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc

interface gas$Jdbc {
  getCloudSqlConnection(url: string): gas$JdbcConnection;
  getCloudSqlConnection(url: string, info: gas$Jdbc$CloudSqlConnectionInfo): gas$JdbcConnection;
  getCloudSqlConnection(url: string, user: string, password: string): gas$JdbcConnection;
  getConnection(url: string): gas$JdbcConnection;
  getSqlConnection(url: string, info: gas$Jdbc$ConnectionInfo): gas$JdbcConnection;
  getSqlConnection(url: string, user: string, password: string): gas$JdbcConnection;
  newDate(milliseconds: number): gas$JdbcDate;
  newTime(milliseconds: number): gas$JdbcTime;
  newTimestamp(milliseconds: number): gas$JdbcTimestamp;
  parseDate(date: string): gas$JdbcDate;
  parseTime(time: string): gas$JdbcTime;
  parseTimestamp(timestamp: string): gas$JdbcTimestamp;
}

declare var Jdbc: gas$Jdbc;

type gas$Jdbc$CloudSqlConnectionInfo = {
  connectTimeoutSeconds?: number,
  database?: string,
  instance?: string,
  password?: string,
  queryTimeoutSeconds: number,
  user?: string
}

type gas$Jdbc$ConnectionInfo = {
  databaseName: string,
  password: string,
  useJDBCCompliantTimeZoneShift: boolean,
  user: string,
  _serverSslCertificate: string,
  _clientSslCertificate: string,
  _clientSslKey: string
}
