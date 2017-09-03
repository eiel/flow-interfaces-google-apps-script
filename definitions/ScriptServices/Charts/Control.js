// @flow
// @see https://developers.google.com/apps-script/reference/charts/control

interface gas$Control {
  getId(): string;
  getType(): string;
  setId(id: string): gas$Control;
}
