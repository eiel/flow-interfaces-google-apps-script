// @flow
// @see https://developers.google.com/apps-script/reference/script/authorization-info

interface gas$AuthorizationInfo {
  getAuthorizationStatus(): gas$AuthorizationStatus;
  getAuthorizationUrl(): string;
}
