// @flow
// @see https://developers.google.com/apps-script/guides/html/reference/url

interface gas$Url {
  getLocation(function: (location: gas$Location) => any): void;
}

interface gas$Location {
  +hash: string;
  +parameter: {[string]: string};
  +parameters: {[string]: string[]};
}
