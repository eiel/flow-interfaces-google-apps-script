// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/container-info

interface gas$Spreadsheet$ContainerInfo {
  getAnchorColumn(): number;
  getAnchorRow(): number;
  getOffsetX(): number;
  getOffsetY(): number;
}
