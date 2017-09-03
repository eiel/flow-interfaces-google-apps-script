# flow-interfaces-google-apps-script

[![npm](https://img.shields.io/npm/v/flow-interfaces-google-apps-script.svg)](https://www.npmjs.com/package/flow-interfaces-google-apps-script)
[![npm](https://img.shields.io/npm/dt/flow-interfaces-google-apps-script.svg)](https://www.npmjs.com/package/flow-interfaces-google-apps-script)

# Usage

## NPM or YARN

```
npm install --save-dev flow-interface-google-apps-script
```

## Flow Config

Add the interfaces to your `.flowconfig`

```
[libs]
node_modules/flow-interfaces-google-apps-script/definitions
```

# Types

Detailed object types described in the [Google Apps Script docs](https://developers.google.com/apps-script/reference/calendar/) are also available.

These types are prefixed with gas$, e.g. gas$Event.

# Example

```
// @flow
const res: gas$HTTPResponse = UrlFetchApp.fetch("hoge");
const res2: number = res
```

```
$ flow
Error: index.js:3
  3: const res2: number = res
                          ^^^ gas$HTTPResponse. This type is incompatible with
  3: const res2: number = res
                 ^^^^^^ number


Found 1 error
```

# Limited

Not Used MimeType

```
const gasMimeType: gas$Enum$MimeType = ((MimeType: any): gas$Enum$MimeType);
const mimeType: gas$MimeType = gasMimeType.ZIP;
```

# TODO

## Script Services

* [X] Base
* [X] Cache
* [X] Charts
* [ ] Content
* [ ] HTML
* [ ] JDBC
* [ ] Lock
* [ ] Mail
* [ ] Optimization
* [X] Properties
* [ ] Script
* [X] URL Fetch
* [ ] Utilities
* [ ] XML


## Gsuite Service

* [ ] Calendar
* [ ] Contacts
* [ ] Document
* [X] Drive
* [ ] Forms
* [ ] Gmail
* [ ] Groups
* [ ] Language
* [ ] Maps
* [ ] Spreadsheet

## Advanced Google Services

* [ ] Admin SDK
* [ ] AdSense
* [ ] Analytics
* [ ] Apps Activity
* [ ] BigQuery
* [ ] Calendar
* [ ] Classroom
* [ ] Drive
* [ ] DoubleClick Campaigns
* [ ] Fusion Tabels
* [ ] Gmail
* [ ] Google+
* [ ] Google+ Domains
* [ ] Mirror
* [ ] Prediction
* [ ] Sheets
* [ ] Shopping Content
* [ ] Slides
* [ ] Tasks
* [ ] Tag Manager
* [ ] URL Shortener
* [ ] YouTube
