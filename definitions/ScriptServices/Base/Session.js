// @flow
// @see https://developers.google.com/apps-script/reference/base/session

interface gas$Session {
  getActiveUser(): gas$User;
  getActiveUserLocale(): string;
  getEffectiveUser(): gas$User;
  getScriptTimeZone(): string;
  getTemporaryActiveUserKey(): string;
}

declare var Session: gas$Session;
