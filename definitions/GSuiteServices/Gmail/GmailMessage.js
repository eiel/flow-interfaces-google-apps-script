// @flwo
// @see https://developers.google.com/apps-script/reference/gmail/gmail-message

interface gas$Gmail$CreateReplyOption {
  attachments?: gas$BlobSource[];
  bcc?: string;
  cc?: string;
  from?: string;
  htmlBody?: string;
  inlineImages?: Object;
  name?: string;
  replyTo?: string;
  subject?: string;
}

interface gas$Gmail$ForwardOption {
  attachments?: gas$BlobSource[];
  bcc?: string;
  cc?: string;
  from?: string;
  htmlBody?: string;
  inlineImages?: Object;
  name?: string;
  noReply?: boolean;
  replyTo?: string;
  subject?: string;
}

interface gas$Gmail$MessageReplayOption {
  attachments?: gas$BlobSource[];
  bcc?: String;
  cc?: String;
  from?: String;
  htmlBody?: String;
  inlineImages?: Object;
  name?: String;
  noReply?: boolean;
  replyTo?: String;
  subject?: String;
}

interface gas$Gmail$GmailMessage {
  createDraftReply(body: string): gas$Gmail$GmailDraft;
  createDraftReply(body: string, options: gas$Gmail$CreateReplyOption): gas$Gmail$GmailDraft;
  createDraftReplyAll(body: string): gas$Gmail$GmailDraft;
  createDraftReplyAll(body: string, options: gas$Gmail$CreateReplyOption): gas$Gmail$GmailDraft;
  forward(recipient: string): gas$Gmail$GmailMessage;
  forward(recipient: string, options: gas$Gmail$ForwardOption): gas$Gmail$GmailMessage;
  getAttachments(): gas$Gmail$GmailAttachment[];
  getBcc(): string;
  getBody(): string;
  getCc(): string;
  getDate(): Date;
  getFrom(): string;
  getId(): string;
  getPlainBody(): string;
  getRawContent(): string;
  getReplyTo(): string;
  getSubject(): string;
  getThread(): gas$Gmail$GmailThread;
  getTo(): string;
  isDraft(): boolean;
  isInChats(): boolean;
  isInInbox(): boolean;
  isInPriorityInbox(): boolean;
  isInTrash(): boolean;
  isStarred(): boolean;
  isUnread(): boolean;
  markRead(): gas$Gmail$GmailMessage;
  markUnread(): gas$Gmail$GmailMessage;
  moveToTrash(): gas$Gmail$GmailMessage;
  refresh(): gas$Gmail$GmailMessage;
  reply(body: string): gas$Gmail$GmailMessage;
  reply(body: string, options: gas$Gmail$MessageReplayOption): gas$Gmail$GmailMessage;
  replyAll(body: string): gas$Gmail$GmailMessage;
  replyAll(body: string, options: gas$Gmail$MessageReplayOption): gas$Gmail$GmailMessage;
  star(): gas$Gmail$GmailMessage;
  unstar(): gas$Gmail$GmailMessage;
}
