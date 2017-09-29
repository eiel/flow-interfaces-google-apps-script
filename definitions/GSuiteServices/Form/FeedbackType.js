// @flow
// @see https://developers.google.com/apps-script/reference/forms/feedback-type

opaque type gas$Form$Enum$FeedbackType = any;

interface gas$Form$FeedbackType {
  +CORRECT: gas$Form$Enum$FeedbackType;
  +INCORRECT: gas$Form$Enum$FeedbackType;
  +GENERAL: gas$Form$Enum$FeedbackType;
}
