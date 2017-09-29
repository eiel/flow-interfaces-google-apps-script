// @flow
// @see https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder

interface gas$Form$QuizFeedbackBuilder {
  addLink(url: string): gas$Form$QuizFeedbackBuilder;
  addLink(url: string, displayText: string): gas$Form$QuizFeedbackBuilder;
  build(): gas$Form$QuizFeedback;
  copy(): gas$Form$QuizFeedbackBuilder;
  setText(text: string): gas$Form$QuizFeedbackBuilder;
}
