// @flow
// @see https://developers.google.com/apps-script/reference/lock/lock-service

interface gas$LockService {
  getDocumentLock(): gas$Lock;
  getScriptLock(): gas$Lock;
  getUserLock(): gas$Lock;
}

declare var LockService: gas$LockService
