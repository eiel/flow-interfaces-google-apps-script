// @flow
// @see https://developers.google.com/apps-script/reference/groups/group

interface gas$Groups$Group {
  getEmail(): string;
  getRole(email: string): gas$Groups$Role;
  getRole(user: gas$User): gas$Groups$Role;
  getUsers(): gas$User[];
  hasUser(email: string): boolean;
  hasUser(user: gas$User): boolean;
}
