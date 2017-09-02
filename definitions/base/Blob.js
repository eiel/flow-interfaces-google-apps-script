// @flow
// https://developers.google.com/apps-script/reference/base/blob

type gas$ContentType = 'application/pdf' | 'image/bmp' | 'image/gif' | 'image/jpeg' | 'image/png'

type gas$Byte = number
interface gas$Blob {
    copyBlob(): gas$Blob;
    getAs(contentType: gas$ContentType): gas$Blob;
    getBytes(): gas$Byte[];
    getContentType(): ?string;
    getDataAsString(): string;
    getName(): ?string;
    isGoogleType(): boolean;
    setbytes(data: gas$Byte[]): gas$Blob;
    setContentType(contentType: string): gas$Blob;
    setContentTypeFromExtension(): gas$Blob;
    setDataFromString(string: string): gas$Blob;
    setDataFromString(string: string, charset: string): gas$Blob;
    setName(name: string): gas$Blob
}
