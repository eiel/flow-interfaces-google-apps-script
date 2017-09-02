// @flow
// @see https://developers.google.com/apps-script/reference/drive/access

opaque type gas$Drive$Access = any;

interface gas$Drive$Enum$Access {
  +ANYONE: gas$Drive$Access;
  +ANYONE_WITH_LINK: gas$Drive$Access;
  +DOMAIN: gas$Drive$Access;
  +DOMAIN_WITH_LINK: gas$Drive$Access;
  +PRIVATE: gas$Drive$Access;
}
