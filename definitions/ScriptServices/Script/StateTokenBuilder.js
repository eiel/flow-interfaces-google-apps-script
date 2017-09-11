// @flow
// @see https://developers.google.com/apps-script/reference/script/state-token-builder

interface gas$StateTokenBuilder {
  createToken(): string;
  withArgument(name: string, value: string): gas$StateTokenBuilder;
  withMethod(method: string): gas$StateTokenBuilder;
  withTimeout(seconds: number): gas$StateTokenBuilder;
}
