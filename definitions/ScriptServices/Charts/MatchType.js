// @flow
// @see https://developers.google.com/apps-script/reference/charts/match-type

interface gas$MatchType {
  getName(): string;
}

interface gas$Enum$MatchType {
  +EXACT: gas$MatchType;
  +PREFIX: gas$MatchType;
  +ANY: gas$MatchType;
}
