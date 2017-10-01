// @flow
// @see https://developers.google.com/apps-script/reference/document/table-row

interface gas$Document$TableRow {
  appendTableCell(): gas$Document$TableCell;
  appendTableCell(textContents: string): gas$Document$TableCell;
  appendTableCell(tableCell: gas$Document$TableCell): gas$Document$TableCell;
  clear(): gas$Document$TableRow;
  copy(): gas$Document$TableRow;
  editAsText(): gas$Document$Text;
  findElement(elementType: gas$Document$ElementType): gas$Document$RangeElement;
  findElement(elementType: gas$Document$ElementType, from: gas$Document$RangeElement): gas$Document$RangeElement;
  findText(searchPattern: string): gas$Document$RangeElement;
  findText(searchPattern: string, from: gas$Document$RangeElement): gas$Document$RangeElement;
  getAttributes(): Object;
  getCell(cellIndex: gas$Integer): gas$Document$TableCell;
  getChild(childIndex: gas$Integer): gas$Document$Element;
  getChildIndex(child: gas$Document$Element): gas$Integer;
  getLinkUrl(): string;
  getMinimumHeight(): gas$Integer;
  getNextSibling(): gas$Document$Element;
  getNumCells(): gas$Integer;
  getNumChildren(): gas$Integer;
  getParent(): gas$Document$ContainerElement;
  getParentTable(): gas$Document$Table;
  getPreviousSibling(): gas$Document$Element;
  getText(): string;
  getTextAlignment(): gas$Document$TextAlignment;
  getType(): gas$Document$ElementType;
  insertTableCell(childIndex: gas$Integer): gas$Document$TableCell;
  insertTableCell(childIndex: gas$Integer, textContents: string): gas$Document$TableCell;
  insertTableCell(childIndex: gas$Integer, tableCell: gas$Document$TableCell): gas$Document$TableCell;
  isAtDocumentEnd(): boolean;
  merge(): gas$Document$TableRow;
  removeCell(cellIndex: gas$Integer): gas$Document$TableCell;
  removeChild(child: gas$Document$Element): gas$Document$TableRow;
  removeFromParent(): gas$Document$TableRow;
  replaceText(searchPattern: string, replacement: string): gas$Document$Element;
  setAttributes(attributes: Object): gas$Document$TableRow;
  setLinkUrl(url: string): gas$Document$TableRow;
  setMinimumHeight(minHeight: gas$Integer): gas$Document$TableRow;
  setTextAlignment(textAlignment: gas$Document$TextAlignment): gas$Document$TableRow;
}
