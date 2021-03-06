// @flow
// @see https://developers.google.com/apps-script/reference/forms/form

interface gas$Form$Form {
  addCheckboxGridItem(): gas$Form$CheckboxGridItem;
  addCheckboxItem(): gas$Form$CheckboxItem;
  addDateItem(): gas$Form$DateItem;
  addDateTimeItem(): gas$Form$DateTimeItem;
  addDurationItem(): gas$Form$DurationItem;
  addEditor(emailAddress: string): gas$Form$Form;
  addEditor(user: gas$User): gas$Form$Form;
  addEditors(emailAddresses: string[]): gas$Form$Form;
  addGridItem(): gas$Form$GridItem;
  addImageItem(): gas$Form$ImageItem;
  addListItem(): gas$Form$ListItem;
  addMultipleChoiceItem(): gas$Form$MultipleChoiceItem;
  addPageBreakItem(): gas$Form$PageBreakItem;
  addParagraphgasTextItem(): gas$Form$ParagraphTextItem;
  addScaleItem(): gas$Form$ScaleItem;
  addSectionHeaderItem(): gas$Form$SectionHeaderItem;
  addTextItem(): gas$Form$TextItem;
  addTimeItem(): gas$Form$TimeItem;
  addVideoItem(): gas$Form$VideoItem;
  canEditResponse(): boolean;
  collectsEmail(): boolean;
  createResponse(): gas$Form$FormResponse;
  deleteAllResponses(): gas$Form$Form;
  deleteItem(index: gas$Integer): void;
  deleteItem(item: gas$Form$Item): void;
  getConfirmationMessage(): string;
  getCustomClosedFormMessage(): string;
  getDescription(): string;
  getDestinationId(): string;
  getDestinationType(): gas$Form$DestinationType;
  getEditUrl(): string;
  getEditors(): gas$User[];
  getId(): string;
  getItemById(id: gas$Integer): gas$Form$Item;
  getItems(): gas$Form$Item[];
  getItems(itemType: gas$Form$ItemType): gas$Form$Item[];
  getPublishedUrl(): string;
  getResponse(responseId: string): gas$Form$FormResponse;
  getResponses(): gas$Form$FormResponse[];
  getResponses(timestamp: Date): gas$Form$FormResponse[];
  getShuffleQuestions(): boolean;
  getSummaryUrl(): string;
  getTitle(): string;
  hasLimitOneResponsePerUser(): boolean;
  hasProgressBar(): boolean;
  hasRespondAgainLink(): boolean;
  isAcceptingResponses(): boolean;
  isPublishingSummary(): boolean;
  isQuiz(): boolean;
  moveItem(from: gas$Integer, to: gas$Integer): gas$Form$Item;
  moveItem(item: gas$Form$Item, toIndex: gas$Integer): gas$Form$Item;
  removeDestination(): gas$Form$Form;
  removeEditor(emailAddress: string): gas$Form$Form;
  removeEditor(user: gas$User): gas$Form$Form;
  requiresLogin(): boolean;
  setAcceptingResponses(enabled: boolean): gas$Form$Form;
  setAllowResponseEdits(enabled: boolean): gas$Form$Form;
  setCollectEmail(collect: boolean): gas$Form$Form;
  setConfirmationMessage(message: string): gas$Form$Form;
  setCustomClosedFormMessage(message: string): gas$Form$Form;
  setDescription(description: string): gas$Form$Form;
  setDestination(type: gas$Form$DestinationType, id: string): gas$Form$Form;
  setIsQuiz(enabled: boolean): gas$Form$Form;
  setLimitOneResponsePerUser(enabled: boolean): gas$Form$Form;
  setProgressBar(enabled: boolean): gas$Form$Form;
  setPublishingSummary(enabled: boolean): gas$Form$Form;
  setRequireLogin(requireLogin: boolean): gas$Form$Form;
  setShowLinkToRespondAgain(enabled: boolean): gas$Form$Form;
  setShuffleQuestions(shuffle: boolean): gas$Form$Form;
  setTitle(title: string): gas$Form$Form;
  shortenFormUrl(url: string): string;
  submitGrades(responses: gas$Form$FormResponse[]): gas$Form$Form;
}
