// @flow
// @see https://developers.google.com/apps-script/reference/script/service

interface gas$Service {
  +Restriction: gas$Enum$Service$Restriction;

  disable(): void;
  getUrl(): string;
  isEnabled(): boolean;
}
