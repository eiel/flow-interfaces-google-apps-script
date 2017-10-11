// @flow
// @see https://developers.google.com/apps-script/reference/spreadsheet/range

type gas$Spreadsheet$Range$ClearOptions = {
  commentsOnly?: boolean,
  contentsOnly?: boolean,
  formatOnly?: boolean,
  validationsOnly?: boolean,
}

type gas$Spreadsheet$Range$CopyToOptions = {
  contentsOnly?: boolean,
  formatOnly?: boolean
}

type gas$Spreadsheet$FontLine = "underline" | "line-through" | "none";
type gas$Spreadsheet$FontStyle = "italic" | "normal";
type gas$Spreadsheet$HorizontalAlignment = "left" | "center" | "normal";
type gas$Spreadsheet$VerticalAlignment = "top" | "middel" | "bottom";
type gas$Spreadsheet$Value = Date | number | boolean | string;

interface gas$Spreadsheet$Range {
  activate(): gas$Spreadsheet$Range;
  breakApart(): gas$Spreadsheet$Range;
  canEdit(): boolean;
  clear(): gas$Spreadsheet$Range;
  clear(options: gas$Spreadsheet$Range$ClearOptions): gas$Spreadsheet$Range;
  clearContent(): gas$Spreadsheet$Range;
  clearDataValidations(): gas$Spreadsheet$Range;
  clearFormat(): gas$Spreadsheet$Range;
  clearNote(): gas$Spreadsheet$Range;
  copyFormatToRange(gridId: number, column: number, columnEnd: number, row: number, rowEnd: number): void;
  copyFormatToRange(sheet: gas$Spreadsheet$Sheet , column: number, columnEnd: number, row: number, rowEnd: number): void;
  copyTo(destination: gas$Spreadsheet$Range): void;
  copyTo(destination: gas$Spreadsheet$Range, options: gas$Spreadsheet$Range$CopyToOptions): void;
  copyValuesToRange(gridId: number, column: number, columnEnd: number, row: number, rowEnd: number): void;
  copyValuesToRange(sheet: gas$Spreadsheet$Sheet, column: number, columnEnd: number, row: number, rowEnd: number): void;
  getA1Notation(): string;
  getBackground(): string;
  getBackgrounds(): string[][];
  getCell(row: number, column: number): gas$Spreadsheet$Range;
  getColumn(): number;
  getDataSourceUrl(): string;
  getDataTable(): gas$DataTable;
  getDataTable(firstRowIsHeader: boolean): gas$DataTable;
  getDataValidation(): gas$Spreadsheet$DataValidation;
  getDataValidations(): gas$Spreadsheet$DataValidation[][];
  getDisplayValue(): string;
  getDisplayValues(): string[][];
  getFontColor(): string;
  getFontColors(): string[][];
  getFontFamilies(): string;
  getFontFamily(): string;
  getFontLine(): string;
  getFontLines(): string[][];
  getFontSize(): number;
  getFontSizes(): number[][];
  getFontStyle(): string;
  getFontStyles(): string[][];
  getFontWeight(): string;
  getFontWeights(): string[][];
  getFormula(): string;
  getFormulaR1C1(): string;
  getFormulas(): string[][];
  getFormulasR1C1(): string[][];
  getGridId(): number;
  getHeight(): number;
  getHorizontalAlignment(): string;
  getHorizontalAlignments(): string[][];
  getLastColumn(): number;
  getLastRow(): number;
  getMergedRanges(): gas$Spreadsheet$Range[];
  getNote(): string;
  getNotes(): string[][];
  getNumColumns(): number;
  getNumRows(): number;
  getNumberFormat(): string;
  getNumberFormats(): string[][];
  getRow(): number;
  getRowIndex(): number;
  getSheet(): gas$Spreadsheet$Sheet;
  getValue(): gas$Spreadsheet$Value;
  getValues(): gas$Spreadsheet$Value[][];
  getVerticalAlignment(): string;
  getVerticalAlignments(): string[][];
  getWidth(): number;
  getWrap(): boolean;
  getWraps(): boolean;
  isBlank(): boolean;
  isEndColumnBounded(): boolean;
  isEndRowBounded(): boolean;
  isPartOfMerge(): boolean;
  isStartColumnBounded(): boolean;
  isStartRowBounded(): boolean;
  merge(): gas$Spreadsheet$Range;
  mergeAcross(): gas$Spreadsheet$Range;
  mergeVertically(): gas$Spreadsheet$Range;
  moveTo(target: gas$Spreadsheet$Range): void;
  offset(rowOffset: number, columnOffset: number): gas$Spreadsheet$Range;
  offset(rowOffset: number, columnOffset: number, numRows: number): gas$Spreadsheet$Range;
  offset(rowOffset: number, columnOffset: number, numRows: number, numColumns: number): gas$Spreadsheet$Range;
  protect(): gas$Spreadsheet$Protection;
  randomize(): gas$Spreadsheet$Range;
  setBackground(color: string): gas$Spreadsheet$Range;
  setBackgroundRGB(red: number, green: number, blue: number): gas$Spreadsheet$Range;
  setBackgrounds(color: string[][]): gas$Spreadsheet$Range;
  setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean): gas$Spreadsheet$Range;
  setBorder(top: boolean, left: boolean, bottom: boolean, right: boolean, vertical: boolean, horizontal: boolean, color: string, style: gas$Spreadsheet$BorderStyle): gas$Spreadsheet$Range;
  setDataValidation(rule: gas$Spreadsheet$DataValidation): gas$Spreadsheet$Range;
  setDataValidations(rules: gas$Spreadsheet$DataValidation[][]): gas$Spreadsheet$Range;
  setFontColor(color: string): gas$Spreadsheet$Range;
  setFontColors(colors: string[]): gas$Spreadsheet$Range;
  setFontFamilies(fontFamilies: string[][]): gas$Spreadsheet$Range;
  setFontFamily(fontFamily: string): gas$Spreadsheet$Range;
  setFontLine(fontLine: ?gas$Spreadsheet$FontLine): gas$Spreadsheet$Range;
  setFontLines(fontLines: ?gas$Spreadsheet$FontLine[][]): gas$Spreadsheet$Range;
  setFontSize(size: number): gas$Spreadsheet$Range;
  setFontSizes(sizes: number[][]): gas$Spreadsheet$Range;
  setFontStyle(fontStyle: string): gas$Spreadsheet$Range;
  setFontStyles(fontStyles: string[][]): gas$Spreadsheet$Range;
  setFontWeight(fontWeight: number): gas$Spreadsheet$Range;
  setFontWeights(fontWeights: number[][]): gas$Spreadsheet$Range;
  setFormula(formula: string): gas$Spreadsheet$Range;
  setFormulaR1C1(formula: string): gas$Spreadsheet$Range;
  setFormulas(formulas: string[][]): gas$Spreadsheet$Range;
  setFormulasR1C1(formulas: string[][]): gas$Spreadsheet$Range;
  setHorizontalAlignment(alignment: ?gas$Spreadsheet$HorizontalAlignment): gas$Spreadsheet$Range;
  setHorizontalAlignments(alignments: gas$Spreadsheet$HorizontalAlignment[]): gas$Spreadsheet$Range;
  setNote(note: ?string): gas$Spreadsheet$Range;
  setNotes(notes: string[][]): gas$Spreadsheet$Range;
  setNumberFormat(numberFormat: string): gas$Spreadsheet$Range;
  setNumberFormats(numberFormats: string[][]): gas$Spreadsheet$Range;
  setValue(value: gas$Spreadsheet$Value): gas$Spreadsheet$Range;
  setValues(values: gas$Spreadsheet$Value[][]): gas$Spreadsheet$Range;
  setVerticalAlignment(alignment: ?gas$Spreadsheet$VerticalAlignment): gas$Spreadsheet$Range;
  setVerticalAlignments(alignments: gas$Spreadsheet$VerticalAlignment[][]): gas$Spreadsheet$Range;
  setWrap(isWrapEnabled: boolean): gas$Spreadsheet$Range;
  setWraps(isWrapEnabled: boolean): gas$Spreadsheet$Range;
  sort(sortSpecObj: Object): gas$Spreadsheet$Range;
}
