// @flow
// @see https://developers.google.com/apps-script/reference/gmail/gmail-app

interface gas$Gmail$CreateDrapftOption {
  +attachments: gas$BlobSource[];
  +bcc: string;
  +cc: string;
  +from: string;
  +htmlBody: string;
  +inlineImages: Object;
  +name: string;
  +replyTo: string;
}

interface gas$Gmail$SendEmailOption {
  +attachments: gas$BlobSource[];
  +bcc: string;
  +cc: string;
  +from: string;
  +htmlBody: string;
  +inlineImages: Object;
  +name: string;
  +noReply: boolean;
  +replyTo: string;
}

interface gas$Gmail$GmailApp {
  createDraft(recipient: string, subject: string, body: string): gas$Gmail$GmailDraft;
  createDraft(recipient: string, subject: string, body: string, options: gas$Gmail$CreateDrapftOption): gas$Gmail$GmailDraft;
  createLabel(name: string): gas$Gmail$GmailLabel;
  deleteLabel(label: gas$Gmail$GmailLabel): gas$Gmail$GmailApp;
  getAliases(): string[];
  getChatThreads(): gas$Gmail$GmailThread[];
  getChatThreads(start: gas$Integer, max: gas$Integer): gas$Gmail$GmailThread[];
  getDraft(draftId: string): gas$Gmail$GmailDraft;
  getDraftMessages(): gas$Gmail$GmailMessage[];
  getDrafts(): gas$Gmail$GmailDraft[];
  getInboxThreads(): gas$Gmail$GmailThread[];
  getInboxThreads(start: gas$Integer, max: gas$Integer): gas$Gmail$GmailThread[];
  getInboxUnreadCount(): gas$Integer;
  getMessageById(id: string): gas$Gmail$GmailMessage;
  getMessagesForThread(thread: gas$Gmail$GmailThread): gas$Gmail$GmailMessage[];
  getMessagesForThreads(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailMessage[][];
  getPriorityInboxThreads(): gas$Gmail$GmailThread[];
  getPriorityInboxThreads(start: gas$Integer, max: gas$Integer): gas$Gmail$GmailThread[];
  getPriorityInboxUnreadCount(): gas$Integer;
  getSpamThreads(): gas$Gmail$GmailThread[];
  getSpamThreads(start: gas$Integer, max: gas$Integer): gas$Gmail$GmailThread[];
  getSpamUnreadCount(): gas$Integer;
  getStarredThreads(): gas$Gmail$GmailThread[];
  getStarredThreads(start: gas$Integer, max: gas$Integer): gas$Gmail$GmailThread[];
  getStarredUnreadCount(): gas$Integer;
  getThreadById(id: string): gas$Gmail$GmailThread;
  getTrashThreads(): gas$Gmail$GmailThread[];
  getTrashThreads(start: gas$Integer, max: gas$Integer): gas$Gmail$GmailThread[];
  getUserLabelByName(name: string): gas$Gmail$GmailLabel;
  getUserLabels(): gas$Gmail$GmailLabel[];
  markMessageRead(message: gas$Gmail$GmailMessage): gas$Gmail$GmailApp;
  markMessageUnread(message: gas$Gmail$GmailMessage): gas$Gmail$GmailApp;
  markMessagesRead(messages: gas$Gmail$GmailMessage[]): gas$Gmail$GmailApp;
  markMessagesUnread(messages: gas$Gmail$GmailMessage[]): gas$Gmail$GmailApp;
  markThreadImportant(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  markThreadRead(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  markThreadUnimportant(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  markThreadUnread(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  markThreadsImportant(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  markThreadsRead(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  markThreadsUnimportant(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  markThreadsUnread(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  moveMessageToTrash(message: gas$Gmail$GmailMessage): gas$Gmail$GmailApp;
  moveMessagesToTrash(messages: gas$Gmail$GmailMessage[]): gas$Gmail$GmailApp;
  moveThreadToArchive(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  moveThreadToInbox(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  moveThreadToSpam(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  moveThreadToTrash(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  moveThreadsToArchive(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  moveThreadsToInbox(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  moveThreadsToSpam(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  moveThreadsToTrash(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  refreshMessage(message: gas$Gmail$GmailMessage): gas$Gmail$GmailApp;
  refreshMessages(messages: gas$Gmail$GmailMessage[]): gas$Gmail$GmailApp;
  refreshThread(thread: gas$Gmail$GmailThread): gas$Gmail$GmailApp;
  refreshThreads(threads: gas$Gmail$GmailThread[]): gas$Gmail$GmailApp;
  search(query: string): gas$Gmail$GmailThread[];
  search(query: string, start: gas$Integer, max: gas$Integer): gas$Gmail$GmailThread[];
  sendEmail(recipient: string, subject: string, body: string): gas$Gmail$GmailApp;
  sendEmail(recipient: string, subject: string, body: string, options: gas$Gmail$SendEmailOption): gas$Gmail$GmailApp;
  starMessage(message: gas$Gmail$GmailMessage): gas$Gmail$GmailApp;
  starMessages(messages: gas$Gmail$GmailMessage[]): gas$Gmail$GmailApp;
  unstarMessage(message: gas$Gmail$GmailMessage): gas$Gmail$GmailApp;
  unstarMessages(messages: gas$Gmail$GmailMessage[]): gas$Gmail$GmailApp;
}

declare var GmailApp: gas$Gmail$GmailApp;
