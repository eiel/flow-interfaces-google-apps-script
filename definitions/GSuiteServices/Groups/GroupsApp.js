// @flow
// @see https://developers.google.com/apps-script/reference/groups/groups-app

interface gas$Groups$GroupsApp {
  +Role: gas$Groups$Enum$Role;

  getGroupByEmail(email: string): gas$Groups$Group;
  getGroups(): gas$Groups$Group[];
}
