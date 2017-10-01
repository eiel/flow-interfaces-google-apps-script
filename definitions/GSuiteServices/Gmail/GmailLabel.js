// @flow
// @see https://developers.google.com/apps-script/reference/gmail/gmail-label

interface gas$Gmail$GmailLabel {
  addToThread(thread: gas$Gmail$GmailThread): gas$Gmail$GmailLabel;
  addToThreads(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailLabel;
  deleteLabel(): void;
  getName(): String;
  getThreads(): gas$Gmail$GmailThread[];
  getThreads(start: gas$Integer, max: gas$Integer): gas$Gmail$GmailThread[];
  getUnreadCount(): gas$Integer;
  removeFromThread(thread: gas$Gmail$GmailThread): gas$Gmail$GmailLabel;
  removeFromThreads(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailLabel;
}
