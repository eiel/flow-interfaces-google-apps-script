// @flow
// @see https://developers.google.com/apps-script/reference/groups/role

opaque type gas$Groups$Role = any;

interface gas$Groups$Enum$Role {
  +OWNER: gas$Groups$Role;
  +MANAGER: gas$Groups$Role;
  +MEMBER: gas$Groups$Role;
  +INVITED: gas$Groups$Role;
  +PENDING: gas$Groups$Role;
}
