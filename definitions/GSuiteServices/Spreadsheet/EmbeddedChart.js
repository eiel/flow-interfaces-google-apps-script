// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart

interface gas$Spreadsheet$EmbeddedChart {
  getAs(contentType: gas$ContentType): gas$Blob;
  getBlob(): gas$Blob;
  getContainerInfo(): gas$Spreadsheet$ContainerInfo;
  getId(): string;
  getOptions(): gas$ChartOptions;
  getRanges(): gas$Spreadsheet$Range[];
  getType(): string;
  modify(): gas$Spreadsheet$EmbeddedChartBuilder;
  setId(id: string): gas$Chart;
}
