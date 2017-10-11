// @flow
// @see https://developers.google.com/apps-script/reference/gmail/gmail-thread

interface gas$Gmail$ThreadReplyOption {
  cc?: string;
  bcc?: string;
  htmlBody?: string;
  name?: string;
  from?: string;
  replyTo?: string;
  noReply?: boolean;
  attachments?: gas$BlobSource[];
  inlineImages?: Object;
}


interface gas$Gmail$GmailThread {
  addLabel(label: gas$Gmail$GmailLabel): gas$Gmail$GmailThread;
  createDraftReply(body: string): gas$Gmail$GmailDraft;
  createDraftReply(body: string, options: gas$Gmail$CreateReplyOption): gas$Gmail$GmailDraft;
  createDraftReplyAll(body: string): gas$Gmail$GmailDraft;
  createDraftReplyAll(body: string, options: gas$Gmail$CreateReplyOption): gas$Gmail$GmailDraft;
  getFirstMessageSubject(): string;
  getId(): string;
  getLabels(): gas$Gmail$GmailLabel[];
  getLastMessageDate(): Date;
  getMessageCount(): gas$Integer;
  getMessages(): gas$Gmail$GmailMessage[];
  getPermalink(): string;
  hasStarredMessages(): boolean;
  isImportant(): boolean;
  isInChats(): boolean;
  isInInbox(): boolean;
  isInPriorityInbox(): boolean;
  isInSpam(): boolean;
  isInTrash(): boolean;
  isUnread(): boolean;
  markImportant(): gas$Gmail$GmailThread;
  markRead(): gas$Gmail$GmailThread;
  markUnimportant(): gas$Gmail$GmailThread;
  markUnread(): gas$Gmail$GmailThread;
  moveToArchive(): gas$Gmail$GmailThread;
  moveToInbox(): gas$Gmail$GmailThread;
  moveToSpam(): gas$Gmail$GmailThread;
  moveToTrash(): gas$Gmail$GmailThread;
  refresh(): gas$Gmail$GmailThread;
  removeLabel(label: gas$Gmail$GmailLabel): gas$Gmail$GmailThread;
  reply(body: string): gas$Gmail$GmailThread;
  reply(body: string, options: gas$Gmail$ThreadReplyOption): gas$Gmail$GmailThread;
  replyAll(body: string): gas$Gmail$GmailThread;
  replyAll(body: string, options: gas$Gmail$ThreadReplyOption): gas$Gmail$GmailThread;
}
