// @flow
// @see https://developers.google.com/apps-script/reference/mail/mail-app

interface gas$MailApp {
  getRemainingDailyQuota(): number;
  sendEmail(message: gas$Mail$MailMessage): void;
  sendEmail(recipient: string, subject: string, body: string): void;
  sendEmail(recipient: string, subject: string, body: string, options: gas$Mail$MailOptions): void;
}

declare var MailApp: gas$MailApp;

type gas$Mail$MailMessage = {
  attachments?: gas$BlobSource[],
  bcc?: string,
  body?: string,
  cc?: string,
  htmlBody?: string,
  inlineImages?: Object,
  name?: string,
  noReply?: boolean,
  replyTo?: string,
  subject?: string,
  to?: string
}

type gas$Mail$MailOptions = {
  attachments?: gas$BlobSource[],
  bcc?: string,
  cc?: string,
  htmlBody?: string,
  inlineImages?: Object,
  name?: string,
  noReply?: boolean,
  replyTo?: string
}
