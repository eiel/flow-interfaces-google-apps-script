// @flow
// @see https://developers.google.com/apps-script/reference/utilities/digest-algorithm

opaque type gas$DigestAlgorithm = any;

interface gas$Enum$DigestAlgorithm {
  +MD2: gas$DigestAlgorithm;
  +MD5: gas$DigestAlgorithm;
  +SHA_1: gas$DigestAlgorithm;
  +SHA_256: gas$DigestAlgorithm;
  +SHA_384: gas$DigestAlgorithm;
  +SHA_512: gas$DigestAlgorithm;
}
