// @flow
// @see https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app

type gas$Method = "post" | "get" | "delete" | "put"
type gas$Headers = {[string]: string}

interface gas$UrlFetchApp$Parameters {
    contentType?: string;
    headers?: Headers;
    method?: gas$Method;
    payload?: Object | string;
    useInternet?: boolean;
    validateHttpsCertificates?: boolean;
    followRedirects?: boolean;
    muteHttpExceptions?: boolean;
    escaping?: boolean;
}

interface gas$UrlFetchApp {
    fetch(url: string): gas$HTTPResponse;
    fetch(url: string, params: gas$UrlFetchApp$Parameters): gas$HTTPResponse;
    getRequest(url: string): Object;
    getRequest(url: string, params: gas$UrlFetchApp$Parameters): Object;
}

declare var UrlFetchApp: gas$UrlFetchApp
