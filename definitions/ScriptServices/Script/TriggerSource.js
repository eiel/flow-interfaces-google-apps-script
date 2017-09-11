// @flow
// @see https://developers.google.com/apps-script/reference/script/trigger-source

opaque type gas$TriggerSource = any;

interface gas$Enum$TriggerSource {
  +SPREADSHEETS: gas$TriggerSource;
  +CLOCK: gas$TriggerSource;
  +FORMS: gas$TriggerSource;
  +DOCUMENTS: gas$TriggerSource;
}
