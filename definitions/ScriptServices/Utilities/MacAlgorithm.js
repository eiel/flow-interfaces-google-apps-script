// @flow
// @see https://developers.google.com/apps-script/reference/utilities/mac-algorithm

opaque type gas$MacAlgorithm = any;

interface gas$Enum$MacAlgorithm {
  +HMAC_MD5: gas$MacAlgorithm;
  +HMAC_SHA_1: gas$MacAlgorithm;
  +HMAC_SHA_256: gas$MacAlgorithm;
  +HMAC_SHA_384: gas$MacAlgorithm;
  +HMAC_SHA_512: gas$MacAlgorithm;
}
