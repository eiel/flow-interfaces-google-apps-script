// @flow
// @see https://developers.google.com/apps-script/reference/contacts/sensitivity

opaque type gas$Contacts$Sensitivity = any;

interface gas$Contacts$Enum$Sensitivity {
  +CONFIDENTIAL: gas$Contacts$Sensitivity;
  +NORMAL: gas$Contacts$Sensitivity;
  +PERSONAL: gas$Contacts$Sensitivity;
  +PRIVATE: gas$Contacts$Sensitivity;
}
