// @flow
// @see https://developers.google.com/apps-script/reference/document/table

interface gas$Document$Table {
  appendTableRow(): gas$Document$TableRow;
  appendTableRow(tableRow: gas$Document$TableRow): gas$Document$TableRow;
  clear(): gas$Document$Table;
  copy(): gas$Document$Table;
  editAsText(): gas$Document$Text;
  findElement(elementType: gas$Document$ElementType): gas$Document$RangeElement;
  findElement(elementType: gas$Document$ElementType, from: gas$Document$RangeElement): gas$Document$RangeElement;
  findText(searchPattern: string): gas$Document$RangeElement;
  findText(searchPattern: string, from: gas$Document$RangeElement): gas$Document$RangeElement;
  getAttributes(): Object;
  getBorderColor(): string;
  getBorderWidth(): number;
  getCell(rowIndex: gas$Integer, cellIndex: gas$Integer): gas$Document$TableCell;
  getChild(childIndex: gas$Integer): gas$Document$Element;
  getChildIndex(child: gas$Document$Element): gas$Integer;
  getColumnWidth(columnIndex: gas$Integer): number;
  getLinkUrl(): string;
  getNextSibling(): gas$Document$Element;
  getNumChildren(): gas$Integer;
  getNumRows(): gas$Integer;
  getParent(): gas$Document$ContainerElement;
  getPreviousSibling(): gas$Document$Element;
  getRow(rowIndex: gas$Integer): gas$Document$TableRow;
  getText(): string;
  getTextAlignment(): gas$Document$TextAlignment;
  getType(): gas$Document$ElementType;
  insertTableRow(childIndex: gas$Integer): gas$Document$TableRow;
  insertTableRow(childIndex: gas$Integer, tableRow: gas$Document$TableRow): gas$Document$TableRow;
  isAtDocumentEnd(): boolean;
  removeChild(child: gas$Document$Element): gas$Document$Table;
  removeFromParent(): gas$Document$Table;
  removeRow(rowIndex: gas$Integer): gas$Document$TableRow;
  replaceText(searchPattern: string, replacement: string): gas$Document$Element;
  setAttributes(attributes: Object): gas$Document$Table;
  setBorderColor(color: string): gas$Document$Table;
  setBorderWidth(width: number): gas$Document$Table;
  setColumnWidth(columnIndex: gas$Integer, width: number): gas$Document$Table;
  setLinkUrl(url: string): gas$Document$Table;
  setTextAlignment(textAlignment: gas$Document$TextAlignment): gas$Document$Table;
}
