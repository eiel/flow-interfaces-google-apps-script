// @flow
// @see https://developers.google.com/apps-script/reference/language/language-app


interface gas$Language$AdvancedArgs {
  +contentType: 'text' | 'html'
}

interface gas$Language$LanguageApp {
  translate(text: string, sourceLanguage: string, targetLanguage: string): string;
  translate(text: string, sourceLanguage: string, targetLanguage: string, advancedArgs: gas$Language$AdvancedArgs): string;
}

declare var LanguageApp: gas$Language$LanguageApp;
