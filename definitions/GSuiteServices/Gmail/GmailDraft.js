// @flow
// @see https://developers.google.com/apps-script/reference/gmail/gmail-draft

interface gas$Gmail$UpdateOption {
  +attachments: gas$BlobSource[];
  +bcc: string;
  +cc: string;
  +from: string;
  +htmlBody: string;
  +inlineImages: Object;
  +name: string;
  +replyTo: string;
}

interface gas$Gmail$GmailDraft {
  deleteDraft(): void;
  getId(): string;
  getMessage(): gas$Gmail$GmailMessage;
  getMessageId(): string;
  send(): gas$Gmail$GmailMessage;
  update(recipient: string, subject: string, body: string): gas$Gmail$GmailDraft;
  update(recipient: string, subject: string, body: string, options: gas$Gmail$UpdateOption): gas$Gmail$GmailDraft;
}
