// @flow
// @see https://developers.google.com/apps-script/reference/document/document-app

interface gas$Document$DocumentApp {
  +Attribute: gas$Document$Enum$Attribute;
  +ElementType: gas$Document$Enum$ElementType;
  // +FontFamily: gas$Document$Enum$FontFamily; // Deprecate
  +GlyphType: gas$Document$Enum$GlyphType;
  +HorizontalAlignment: gas$Document$Enum$HorizontalAlignment;
  +ParagraphHeading: gas$Document$Enum$ParagraphHeading;
  +PositionedLayout: gas$Document$Enum$PositionedLayout;
  +TextAlignment: gas$Document$Enum$TextAlignment;
  +VerticalAlignment: gas$Document$Enum$VerticalAlignment;

  create(name: string): gas$Document$Document;
  getActiveDocument(): gas$Document$Document;
  getUi(): gas$Ui;
  openById(id: string): gas$Document$Document;
  openByUrl(url: string): gas$Document$Document;
}

declare var DocumentApp: gas$Document$DocumentApp;
