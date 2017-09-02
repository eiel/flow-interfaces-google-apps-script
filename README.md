# flow-interfaces-google-apps-script

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
