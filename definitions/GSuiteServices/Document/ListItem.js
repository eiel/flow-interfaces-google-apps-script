// @flow
// @see https://developers.google.com/apps-script/reference/document/list-item

interface gas$Document$ListItem {
  addPositionedImage(image: gas$BlobSource): gas$Document$PositionedImage;
  appendHorizontalRule(): gas$Document$HorizontalRule;
  appendInlineImage(image: gas$BlobSource): gas$Document$InlineImage;
  appendInlineImage(image: gas$Document$InlineImage): gas$Document$InlineImage;
  appendPageBreak(): gas$Document$PageBreak;
  appendPageBreak(pageBreak: gas$Document$PageBreak): gas$Document$PageBreak;
  appendText(text: string): gas$Document$Text;
  appendText(text: gas$Document$Text): gas$Document$Text;
  clear(): gas$Document$ListItem;
  copy(): gas$Document$ListItem;
  editAsText(): gas$Document$Text;
  findElement(elementType: gas$Document$ElementType): gas$Document$RangeElement;
  findElement(elementType: gas$Document$ElementType, from: gas$Document$RangeElement): gas$Document$RangeElement;
  findText(searchPattern: string): gas$Document$RangeElement;
  findText(searchPattern: string, from: gas$Document$RangeElement): gas$Document$RangeElement;
  getAlignment(): gas$Document$HorizontalAlignment;
  getAttributes(): Object;
  getChild(childIndex: gas$Integer): gas$Document$Element;
  getChildIndex(child: gas$Document$Element): gas$Integer;
  getGlyphType(): gas$Document$GlyphType;
  getHeading(): gas$Document$ParagraphHeading;
  getIndentEnd(): number;
  getIndentFirstLine(): number;
  getIndentStart(): number;
  getLineSpacing(): number;
  getLinkUrl(): string;
  getListId(): string;
  getNestingLevel(): gas$Integer;
  getNextSibling(): gas$Document$Element;
  getNumChildren(): gas$Integer;
  getParent(): gas$Document$ContainerElement;
  getPositionedImage(id: string): gas$Document$PositionedImage;
  getPositionedImages(): gas$Document$PositionedImage[];
  getPreviousSibling(): gas$Document$Element;
  getSpacingAfter(): number;
  getSpacingBefore(): number;
  getText(): string;
  getTextAlignment(): gas$Document$TextAlignment;
  getType(): gas$Document$ElementType;
  insertHorizontalRule(childIndex: gas$Integer): gas$Document$HorizontalRule;
  insertInlineImage(childIndex: gas$Integer, image: gas$BlobSource): gas$Document$InlineImage;
  insertInlineImage(childIndex: gas$Integer, image: gas$Document$InlineImage): gas$Document$InlineImage;
  insertPageBreak(childIndex: gas$Integer): gas$Document$PageBreak;
  insertPageBreak(childIndex: gas$Integer, pageBreak: gas$Document$PageBreak): gas$Document$PageBreak;
  insertText(childIndex: gas$Integer, text: string): gas$Document$Text;
  insertText(childIndex: gas$Integer, text: gas$Document$Text): gas$Document$Text;
  isAtDocumentEnd(): boolean;
  isLeftToRight(): boolean;
  merge(): gas$Document$ListItem;
  removeChild(child: gas$Document$Element): gas$Document$ListItem;
  removeFromParent(): gas$Document$ListItem;
  removePositionedImage(id: string): boolean;
  replaceText(searchPattern: string, replacement: string): gas$Document$Element;
  setAlignment(alignment: gas$Document$HorizontalAlignment): gas$Document$ListItem;
  setAttributes(attributes: Object): gas$Document$ListItem;
  setGlyphType(glyphType: gas$Document$GlyphType): gas$Document$ListItem;
  setHeading(heading: gas$Document$ParagraphHeading): gas$Document$ListItem;
  setIndentEnd(indentEnd: number): gas$Document$ListItem;
  setIndentFirstLine(indentFirstLine: number): gas$Document$ListItem;
  setIndentStart(indentStart: number): gas$Document$ListItem;
  setLeftToRight(leftToRight: boolean): gas$Document$ListItem;
  setLineSpacing(multiplier: number): gas$Document$ListItem;
  setLinkUrl(url: string): gas$Document$ListItem;
  setListId(listItem: gas$Document$ListItem): gas$Document$ListItem;
  setNestingLevel(nestingLevel: gas$Integer): gas$Document$ListItem;
  setSpacingAfter(spacingAfter: number): gas$Document$ListItem;
  setSpacingBefore(spacingBefore: number): gas$Document$ListItem;
  setText(text: string): void;
  setTextAlignment(textAlignment: gas$Document$TextAlignment): gas$Document$ListItem;
}