// @flow
// @see https://developers.google.com/apps-script/reference/properties/properties

interface gas$Properties {
  deleteAllProperties(): gas$Properties;
  deleteProperty(key: string): gas$Properties;
  getKeys(): string[];
  getProperties(): Object;
  getProperty(key: string): ?string;
  setProperties(properties: Object): gas$Properties;
  setProperties(properties: Object, deleteAllOthers: boolean): gas$Properties;
  setProperty(key: string, value: string): gas$Properties;
}
