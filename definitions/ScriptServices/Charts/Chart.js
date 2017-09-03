// @flow
// @see https://developers.google.com/apps-script/reference/charts/chart

interface gas$Chart {
  getAs(contentType: gas$ContentType): gas$Blob;
  getBlob(): gas$Blob;
  getId(): string;
  getOptions(): gas$ChartOptinos;
  getType(): string;
  setId(id: string): gas$Chart;
}
