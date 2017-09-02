// @flow
// @see https://developers.google.com/apps-script/reference/base/menu

interface gas$Menu {
  addItem(caption: string, functionName: string): gas$Menu;
  addSeparator(): gas$Menu;
  addSubMenu(menu: gas$Menu): gas$Menu;
  addToUi(): void;
}
