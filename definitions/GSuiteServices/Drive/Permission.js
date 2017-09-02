// @flow
// @see https://developers.google.com/apps-script/reference/drive/permission

opaque type gas$Drive$Permission = any;

interface gas$Drive$Enum$Permission {
  +VIEW: gas$Drive$Permission;
  +EDIT: gas$Drive$Permission;
  +COMMENT: gas$Drive$Permission;
  +OWNER: gas$Drive$Permission;
  +ORGANIZER: gas$Drive$Permission;
  +NONE: gas$Drive$Permission;
}
