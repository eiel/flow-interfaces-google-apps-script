// @flow
// @see https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement

interface gas$JdbcCallableStatement {
  addBatch(): void;
  addBatch(sql: string): void;
  cancel(): void;
  clearBatch(): void;
  clearParameters(): void;
  clearWarnings(): void;
  close(): void;
  execute(): boolean;
  execute(sql: string): boolean;
  execute(sql: string, autoGeneratedKeys: number): boolean;
  execute(sql: string, columnIndexes: number[]): boolean;
  execute(sql: string, columnNames: string[]): boolean;
  executeBatch(): number[];
  executeQuery(): gas$JdbcResultSet;
  executeQuery(sql: string): gas$JdbcResultSet;
  executeUpdate(): number;
  executeUpdate(sql: string): number;
  executeUpdate(sql: string, autoGeneratedKeys: number): number;
  executeUpdate(sql: string, columnIndexes: number[]): number;
  executeUpdate(sql: string, columnNames: string[]): number;
  getArray(parameterIndex: number): gas$JdbcArray;
  getArray(parameterName: string): gas$JdbcArray;
  getBigDecimal(parameterIndex: number): number;
  getBigDecimal(parameterName: string): number;
  getBlob(parameterIndex: number): gas$JdbcBlob;
  gasBlob(parameterName: string): gas$JdbcBlob;
  getBoolean(parameterIndex: number): boolean;
  getBoolean(parameterName: string): boolean;
  getByte(parameterIndex: number): gas$Byte;
  getByte(parameterName: string): gas$Byte;
  getBytes(parameterIndex: number): gas$Byte[];
  getBytes(parameterName: string): gas$Byte[];
  getClob(parameterIndex: number): gas$JdbcClob;
  getClob(parameterName: string): gas$JdbcClob;
  getConnection(): gas$JdbcConnection;
  getDate(parameterIndex: number): gas$JdbcDate;
  getDate(parameterIndex: number, timeZone: string): gas$JdbcDate;
  getDate(parameterName: string): gas$JdbcDate;
  getDate(parameterName: string): gas$JdbcDate;
  getDouble(parameterIndex: number): number;
  getDouble(parameterName: string): number;
  getFetchDirection(): number;
  getFetchSize(): number;
  getFloat(parameterIndex: number): number;
  getFloat(parameterName: string): number;
  getGeneratedKeys(): gas$JdbcResultSet;
  getInt(parameterIndex: number): number;
  getInt(parameterName: string): number;
  getLong(parameterIndex: number): number;
  getLong(parameterName: string): number;
  getMaxFieldSize(): number;
  getMaxRows(): number;
  getMetaData(): gas$JdbcResultSetMetaData;
  getMoreResults(): boolean;
  getMoreResults(current: number): boolean;
  getNClob(parameterIndex: number): gas$JdbcClob;
  getNClob(parameterName: string): gas$JdbcClob;
  getNString(parameterIndex: number): string;
  getNString(parameterName: string): string;
  getObject(parameterIndex: number): Object;
  getObject(parameterName: string): Object;
  getParameterMetaData(): gas$JdbcParameterMetaData;
  getQueryTimeout(): number;
  getRef(parameterIndex: number): gas$JdbcRef;
  getRef(parameterName: string): gas$JdbcRef;
  getResultSet(): gas$JdbcResultSet;
  getResultSetConcurrency(): number;
  getResultSetHoldability(): number;
  getResultSetType(): number;
  getRowId(parameterIndex: number): gas$JdbcRowId;
  getRowId(parameterName: string): gas$JdbcRowId;
  getSQLXML(parameterIndex: number): gas$JdbcSQLXML;
  getSQLXML(parameterName: string): gas$JdbcSQLXML;
  getShort(parameterIndex: number): number;
  getShort(parameterName: string): number;
  getString(parameterIndex: number): string;
  getString(parameterName: string): string;
  getTime(parameterIndex: number): gas$JdbcTime;
  getTime(parameterIndex: number, timeZone: string): gas$JdbcTime;
  getTime(parameterName: string): gas$JdbcTime;
  getTime(parameterName: string, timeZone: string): gas$JdbcTime;
  getTimestamp(parameterIndex: number): gas$JdbcTimestamp;
  getTimestamp(parameterIndex: number, timeZone: string): gas$JdbcTimestamp;
  getTimestamp(parameterName: string): gas$JdbcTimestamp;
  getTimestamp(parameterName: string, timeZone: string): gas$JdbcTimestamp;
  getURL(parameterIndex: number): string;
  getURL(parameterName: string): string;
  getUpdateCount(): number;
  getWarnings(): string[];
  isClosed(): boolean;
  isPoolable(): boolean;
  registerOutParameter(parameterIndex: number, sqlType: number): void;
  registerOutParameter(parameterIndex: number, sqlType: number, scale: number): void;
  registerOutParameter(parameterIndex: number, sqlType: number, typeName: string): void;
  registerOutParameter(parameterName: string, sqlType: number): void;
  registerOutParameter(parameterName: string, sqlType: number, scale: number): void;
  registerOutParameter(parameterName: string, sqlType: number, typeName: string): void;
  setArray(parameterIndex: number, x: gas$JdbcArray): void;
  setBigDecimal(parameterIndex: number, x: number): void;
  setBlob(parameterIndex: number, x: gas$JdbcBlob): void;
  setBlob(parameterName: string, x: gas$JdbcBlob): void;
  setBoolean(parameterIndex: number, x: boolean): void;
  setBoolean(parameterName: string, x: boolean): void;
  setByte(parameterIndex: number, x: gas$Byte): void;
  setByte(parameterName: string, x: gas$Byte): void;
  setBytes(parameterIndex: number, x: gas$Byte[]): void;
  setBytes(parameterName: string, x: gas$Byte[]): void;
  setClob(parameterIndex: number, x: gas$JdbcClob): void;
  setClob(parameterName: string, x: gas$JdbcClob): void;
  setCursorName(name: string): void;
  setDate(parameterIndex: number, x: gas$JdbcDate): void;
  setDate(parameterName: string, x: gas$JdbcDate): void;
  setDate(parameterIndex: number, x: gas$JdbcDate, timeZone: string): void;
  setDate(parameterName: string, x: gas$JdbcDate, timeZone: string): void;
  setDouble(parameterIndex: number, x: number): void;
  setDouble(parameterName: string, x: number): void;
  setEscapeProcessing(enable: boolean): void;
  setFetchDirection(direction: number): void;
  setFetchSize(rows: number): void;
  setFloat(parameterIndex: number, x: number): void;
  setFloat(parameterName: string, x: number): void;
  setInt(parameterIndex: number, x: number): void;
  setInt(parameterName: string, x: number): void;
  setLong(parameterIndex: number, x: number): void;
  setLong(parameterName: string, x: number): void;
  setMaxFieldSize(max: number): void;
  setMaxRows(max: number): void;
  setNClob(parameterIndex: number, x: gas$JdbcClob): void;
  setNClob(parameterName: string, x: gas$JdbcClob): void;
  setNString(parameterIndex: number, x: string): void;
  setNString(parameterName: string, x: string): void;
  setNull(parameterIndex: number, sqlType: number): void;
  setNull(parameterName: number, sqlType: number): void;
  setNull(parameterIndex: number, sqlType: number, typeName: string): void;
  setNull(parameterName: string, sqlType: number, typeName: string): void;
  setObject(index: number, x: Object): void;
  setObject(parameterIndex: number, x: Object, targetSqlType: string): void;
  setObject(parameterIndex: number, x: Object, targetSqlType: string, scalaOrLength: number): void;
  setObject(parameterName: string, x: Object, targetSqlType: string): void;
  setObject(parameterName: string, x: Object, targetSqlType: string, scala: number): void;
  setPoolable(poolable: boolean): void;
  setQueryTimeout(seconds: number): void;
  setRef(parameterIndex: number, x: gas$JdbcRef): void;
  setRef(parameterName: string, x: gas$JdbcRef): void;
  setRowId(parameterIndex: number, x: gas$JdbcRowId): void;
  setRowId(parameterName: string, x: gas$JdbcRowId): void;
  setSQLXML(parameterIndex: number, x: gas$JdbcRowId): void;
  setSQLXML(parameterName: string, x: gas$JdbcRowId): void;
  setShort(parameterIndex: number, x: number): void;
  setShort(parameterName: string, x: number): void;
  setString(parameterIndex: number, x: string): void;
  setString(parameterName: string, x: string): void;
  setTime(parameterIndex: number, x: gas$JdbcTime): void;
  setTime(parameterName: string, x: gas$JdbcTime): void;
  setTime(parameterIndex: number, x: gas$JdbcTime, timeZone: string): void;
  setTime(parameterName: string, x: gas$JdbcTime, timeZone: string): void;
  setTimestamp(parameterIndex: number, x: gas$JdbcTimestamp): void;
  setTimestamp(parameterName: string, x: gas$JdbcTimestamp): void;
  setTimestamp(parameterIndex: number, x: gas$JdbcTimestamp, timeZone: string): void;
  setTimestamp(parameterName: string, x: gas$JdbcTimestamp, timeZone: string): void;
  setURL(parameterIndex: number, x: string): void;
  setURL(parameterName: string, x: string): void;
  wasNull(): boolean;
}
