// @flow
// @see https://developers.google.com/apps-script/reference/base/ui

interface gas$Ui{
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
  showModalDialog(userInterface: gas$HtmlOutput, title: string): void;
  showModelessDialog(userInterface: gas$HtmlOutput, title: string): void;
  showSidebar(userInterface: gas$HtmlOutput): void;
}
