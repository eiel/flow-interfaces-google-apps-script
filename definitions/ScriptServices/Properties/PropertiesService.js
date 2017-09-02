// @flow
// @see https://developers.google.com/apps-script/reference/properties/properties-service

interface gas$PropertiesService {
  getDocumentProperties(): gas$Properties;
  getScriptProperties(): gas$Properties;
  getUserProperties(): gas$Properties;
}

declare var PropertiesService: gas$PropertiesService;
