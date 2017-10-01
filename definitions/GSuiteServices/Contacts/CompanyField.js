// @flow
// @see https://developers.google.com/apps-script/reference/contacts/company-field

interface gas$Contacts$CompanyField {
  deleteCompanyField(): void;
  getCompanyName(): string;
  getJobTitle(): string;
  isPrimary(): boolean;
  setAsPrimary(): gas$Contacts$CompanyField;
  setCompanyName(company: string): gas$Contacts$CompanyField;
  setJobTitle(title: string): gas$Contacts$CompanyField;
}
