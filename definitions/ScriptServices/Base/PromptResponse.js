// @flow
// @see https://developers.google.com/apps-script/reference/base/prompt-response

interface gas$PromptResponse {
  getResponseText(): string;
  getSelectedButton(): gas$Button;
}
