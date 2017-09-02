// @flow
// @see https://developers.google.com/apps-script/reference/properties/properties-service

interface gas$PropetriesService {
  getDocumentProperties(): gas$Properties;
  getScriptProperties(): gas$Properties;
  getUserProperties(): gas$Properties;
}

declare var PropetriesService: gas$PropetriesService;
