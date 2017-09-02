// @flow
// @see https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app

type gas$Method = "post" | "get" | "delete" | "put"
type gas$Headers = {[string]: string}

declare interface gas$UrlFetchApp$Parameters {
    contentType?: string;
    headers?: Headers;
    method?: gas$Method;
    payload?: String;
    useInternet?: boolean;
    validateHttpsCertificates?: boolean;
    followRedirects?: boolean;
    muteHttpExceptions?: boolean;
    escaping?: boolean;
}

declare class gas$UrlFetchApp {
    fetch(url: string): gas$HTTPResponse;
    fetch(url: string, params: gas$UrlFetchApp$Parameters): gas$HTTPResponse;
    getRequest(url: string): Object;
    getRequest(url: string, params: gas$UrlFetchApp$Parameters): Object;
}

var UrlFetchApp: gas$UrlFetchApp
