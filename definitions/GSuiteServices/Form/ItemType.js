// @flow
// @see https://developers.google.com/apps-script/reference/forms/item-type

opaque type gas$Form$Enum$ItemType = any;

interface gas$Form$ItemType {
  +CHECKBOX: gas$Form$Enum$ItemType;
  +CHECKBOX_GRID: gas$Form$Enum$ItemType;
  +DATE: gas$Form$Enum$ItemType;
  +DATETIME: gas$Form$Enum$ItemType;
  +DURATION: gas$Form$Enum$ItemType;
  +GRID: gas$Form$Enum$ItemType;
  +IMAGE: gas$Form$Enum$ItemType;
  +LIST: gas$Form$Enum$ItemType;
  +MULTIPLE_CHOICE: gas$Form$Enum$ItemType;
  +PAGE_BREAK: gas$Form$Enum$ItemType;
  +PARAGRAPH_TEXT: gas$Form$Enum$ItemType;
  +SCALE: gas$Form$Enum$ItemType;
  +SECTION_HEADER: gas$Form$Enum$ItemType;
  +TEXT: gas$Form$Enum$ItemType;
  +TIME: gas$Form$Enum$ItemType;
}
