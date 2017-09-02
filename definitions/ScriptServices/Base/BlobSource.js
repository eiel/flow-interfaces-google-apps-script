// @flow
// @see https://developers.google.com/apps-script/reference/base/blob-source

interface gas$BlobSource {
    getAs(contentType: gas$ContentType): gas$Blob;
    getBlob(): Blob;
}
