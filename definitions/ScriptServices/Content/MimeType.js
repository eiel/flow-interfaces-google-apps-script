// @flow
// @see https://developers.google.com/apps-script/reference/content/mime-type

opaque type gas$Content$MimeType = any;

interface gas$Content$Enum$MimeType {
  +ATOM: gas$Content$MimeType;
  +CSV: gas$Content$MimeType;
  +ICAL: gas$Content$MimeType;
  +JAVASCRIPT: gas$Content$MimeType;
  +JSON: gas$Content$MimeType;
  +RSS: gas$Content$MimeType;
  +TEXT: gas$Content$MimeType;
  +VCARD: gas$Content$MimeType;
  +XML: gas$Content$MimeType;
}
