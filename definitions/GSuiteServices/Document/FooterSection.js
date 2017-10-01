// @flow
// @see https://developers.google.com/apps-script/reference/document/footer-section

interface gas$Document$FooterSection {
  appendHorizontalRule(): gas$Document$HorizontalRule;
  appendImage(image: gas$BlobSource): gas$Document$InlineImage;
  appendImage(image: gas$Document$InlineImage): gas$Document$InlineImage;
  appendListItem(listItem: gas$Document$ListItem): gas$Document$ListItem;
  appendListItem(text: string): gas$Document$ListItem;
  appendParagraph(paragraph: gas$Document$Paragraph): gas$Document$Paragraph;
  appendParagraph(text: string): gas$Document$Paragraph;
  appendTable(): gas$Document$Table;
  appendTable(cells: string[][]): gas$Document$Table;
  appendTable(table: gas$Document$Table): gas$Document$Table;
  clear(): gas$Document$FooterSection;
  copy(): gas$Document$FooterSection;
  editAsText(): gas$Document$Text;
  findElement(elementType: gas$Document$ElementType): gas$Document$RangeElement;
  findElement(elementType: gas$Document$ElementType, from: gas$Document$RangeElement): gas$Document$RangeElement;
  findText(searchPattern: string): gas$Document$RangeElement;
  findText(searchPattern: string, from: gas$Document$RangeElement): gas$Document$RangeElement;
  getAttributes(): Object;
  getChild(childIndex: gas$Integer): gas$Document$Element;
  getChildIndex(child: gas$Document$Element): gas$Integer;
  getImages(): gas$Document$InlineImage[];
  getListItems(): gas$Document$ListItem[];
  getNumChildren(): gas$Integer;
  getParagraphs(): gas$Document$Paragraph[];
  getParent(): gas$Document$ContainerElement;
  getTables(): gas$Document$Table[];
  getText(): String;
  getTextAlignment(): gas$Document$TextAlignment;
  getType(): gas$Document$ElementType;
  insertHorizontalRule(childIndex: gas$Integer): gas$Document$HorizontalRule;
  insertImage(childIndex: gas$Integer, image: gas$BlobSource): gas$Document$InlineImage;
  insertImage(childIndex: gas$Integer, image: gas$Document$InlineImage): gas$Document$InlineImage;
  insertListItem(childIndex: gas$Integer, listItem: gas$Document$ListItem): gas$Document$ListItem;
  insertListItem(childIndex: gas$Integer, text: string): gas$Document$ListItem;
  insertParagraph(childIndex: gas$Integer, paragraph: gas$Document$Paragraph): gas$Document$Paragraph;
  insertParagraph(childIndex: gas$Integer, text: string): gas$Document$Paragraph;
  insertTable(childIndex: gas$Integer): gas$Document$Table;
  insertTable(childIndex: gas$Integer, cells: string[][]): gas$Document$Table;
  insertTable(childIndex: gas$Integer, table: gas$Document$Table): gas$Document$Table;
  removeChild(child: gas$Document$Element): gas$Document$FooterSection;
  removeFromParent(): gas$Document$FooterSection;
  replaceText(searchPattern: string, replacement: string): gas$Document$Element;
  setAttributes(attributes: Object): gas$Document$FooterSection;
  setText(text: string): gas$Document$FooterSection;
  setTextAlignment(textAlignment: gas$Document$TextAlignment): gas$Document$FooterSection;
}
