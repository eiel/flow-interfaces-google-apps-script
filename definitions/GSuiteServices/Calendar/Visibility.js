// @flow
// @see https://developers.google.com/apps-script/reference/calendar/visibility

opaque type gas$Calendar$Visibility = any;

interface gas$Calendar$Enum$Visibility {
  +CONFIDENTIAL: gas$Calendar$Visibility;
  +DEFAULT: gas$Calendar$Visibility;
  +PRIVATE: gas$Calendar$Visibility;
  +PUBLIC: gas$Calendar$Visibility;
}
