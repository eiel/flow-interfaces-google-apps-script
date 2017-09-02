// @flow
// @see https://developers.google.com/apps-script/reference/html/sandbox-mode

opaque type gas$SandboxMode = any;

interface gas$Enum$SandboxMode {
  +EMULATED: gas$SandboxMode;
  +IFRAME: gas$SandboxMode;
  +NATIVE: gas$SandboxMode;
}
