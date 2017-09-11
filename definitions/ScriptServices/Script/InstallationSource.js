// @flow
// @see https://developers.google.com/apps-script/reference/script/installation-source

opaque type gas$InstallationSource = any;

interface gas$Enum$InstallationSource {
  +APPS_MARKETPLACE_DOMAIN_ADD_ON: gas$InstallationSource;
  +NONE: gas$InstallationSource;
  +WEB_STORE_ADD_ON: gas$InstallationSource;
}
