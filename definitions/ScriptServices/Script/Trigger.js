// @flow
// @see https://developers.google.com/apps-script/reference/script/trigger

interface gas$Trigger {
  getEventType(): gas$EventType;
  getHandlerFunction(): string;
  getTriggerSource(): gas$TriggerSource;
  getTriggerSourceId(): string;
  getUniqueId(): string;
}
