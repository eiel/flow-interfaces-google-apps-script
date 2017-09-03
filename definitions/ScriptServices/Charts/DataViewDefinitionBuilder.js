// @flow
// @see https://developers.google.com/apps-script/reference/charts/data-view-definition-builder

interface gas$DataViewDefinitionBuilder {
  build(): gas$DataViewDefinition;
  setColumns(columns: Object[]): gas$DataViewDefinitionBuilder;
}
