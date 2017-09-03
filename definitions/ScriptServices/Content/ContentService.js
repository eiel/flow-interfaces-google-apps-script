// @flow
// @see https://developers.google.com/apps-script/reference/content/content-service

interface gas$ContentService {
  +MimeType: gas$Content$Enum$MimeType;

  createTextOutput(): gas$TextOutput;
  createTextOutput(content: string): gas$TextOutput;
}

declare var ContentService: gas$ContentService;
