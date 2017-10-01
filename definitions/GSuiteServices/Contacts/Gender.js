// @flow
// @see https://developers.google.com/apps-script/reference/contacts/gender

opaque type gas$Contacts$Gender = any;

interface gas$Contacts$Enum$Gender {
  +MALE: gas$Contacts$Gender;
  +FEMALE: gas$Contacts$Gender;
}
