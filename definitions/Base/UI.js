// @flow
// @see https://developers.google.com/apps-script/reference/base/ui

interface gas$UI{
  +Button: gas$Enum$Button;
  +ButtonSet: gas$Enum$ButtonSet;

  alert(prompt: string): gas$Button;
  alert(prompt: string, buttons: gas$ButtonSet): gas$Button;
  alert(title: string, prompt: string, buttons: gas$ButtonSet): gas$Button;
  createAddonMenu(): gas$Menu;
  createMenu(caption: string): gas$Menu;
  prompt(prompt: string): gas$PromptResponse;
  prompt(prompt: string, buttons: gas$ButtonSet): gas$PromptResponse;
  prompt(title: string, prompt: string, buttons: gas$ButtonSet): gas$PromptResponse;
  showModalDialog(userInterface: HtmlOutput, title: string): void;
  showModelessDialog(userInterface: HtmlOutput, title: string): void;
  showSidebar(userInterface: HtmlOutput): void;
}
