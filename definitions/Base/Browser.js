// @flow
// @see https://developers.google.com/apps-script/reference/base/browser
interface gas$Browser {
  Buttons: gas$Enum$ButtonSet;

  inputBox(prompt: string): string;
  inputBox(prompt: string, buttons: gas$buttonSet): string;
  inputBox(title: string, prompt: string, buttons: gas$buttonSet): string;
  msgBox(prompt: string): string;
  msgBox(prompt: string, buttons: gas$ButtonSet): string;
  msgBox(title: string, prompt: string, buttons: gas$buttonSet): string;
}

declare var Browser: gas$Browser;
