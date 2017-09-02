// @flow
// @see https://developers.google.com/apps-script/reference/drive/user

interface gas$Drive$User {
  getDomain(): string;
  getEmail(): string;
  getName(): string;
  getPhotoUrl(): string;
}
