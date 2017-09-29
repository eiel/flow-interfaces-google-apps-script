// @flow
// @see https://developers.google.com/apps-script/reference/forms/form-response

interface gas$Form$FormResponse {
  getEditResponseUrl(): string;
  getGradableItemResponses(): gas$Form$ItemResponse[];
  getGradableResponseForItem(item: gas$Form$Item): gas$Form$ItemResponse;
  getId(): string;
  getItemResponses(): gas$Form$ItemResponse[];
  getRespondentEmail(): string;
  getResponseForItem(item: gas$Form$Item): gas$Form$ItemResponse;
  getTimestamp(): Date;
  submit(): gas$Form$FormResponse;
  toPrefilledUrl(): string;
  withItemGrade(gradedResponse: gas$Form$ItemResponse): gas$Form$FormResponse;
  withItemResponse(response: gas$Form$ItemResponse): gas$Form$FormResponse;
}
