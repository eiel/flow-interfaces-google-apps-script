// @flow
// @see https://developers.google.com/apps-script/reference/script/script-app

interface gas$ScriptApp {
  +AuthMode: gas$Enum$AuthMode;
  +AuthorizationStatus: gas$Enum$AuthorizationStatus;
  +EventType: gas$Enum$EventType;
  +InstallationSource: gas$Enum$InstallationSource;
  +TriggerSource: gas$Enum$TriggerSource;
  +WeekDay: gas$Enum$Weekday;

  deleteTrigger(trigger: gas$Trigger): void;
  getAuthorizationInfo(authMode: gas$AuthMode): gas$AuthorizationInfo;
  getInstallationSource(): gas$InstallationSource;
  getOAuthToken(): string;
  getProjectTriggers(): gas$Trigger[];
  getScriptId(): string;
  getService(): gas$Service;
  getUserTriggers(document: gas$Document$Document): gas$Trigger[];
  getUserTriggers(form: gas$Form$Form): gas$Trigger[];
  getUserTriggers(spreadsheet: gas$Spreadsheet$Spreadsheet): gas$Trigger[];
  invalidateAuth(): void;
  newStateToken(): gas$StateTokenBuilder;
  newTrigger(functionName: string): gas$TriggerBuilder;
}

declare var ScriptApp: gas$ScriptApp;
