// @flow
// @see https://developers.google.com/apps-script/reference/forms/item-response

interface gas$Form$ItemResponse {
  getFeedback(): Object;
  getItem(): gas$Form$Item;
  getResponse(): Object;
  getScore(): Object;
  setFeedback(feedback: Object): gas$Form$ItemResponse;
  setScore(score: Object): gas$Form$ItemResponse;
}
