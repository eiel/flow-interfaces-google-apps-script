// @flow
// @see https://developers.google.com/apps-script/reference/utilities/charset

opaque type gas$Charset = any;

interface gas$Enum$Charset {
  +US_ASCII: gas$Charset;
  +UTF_8: gas$Charset;
}
