// @flow
// @see https://developers.google.com/apps-script/reference/drive/file

interface gas$Drive$File {
  addCommenter(emailAddress: string): gas$Drive$File;
  addCommenter(user: gas$Drive$User): gas$Drive$File;
  addCommenters(emailAddresses: string[]): gas$Drive$File;
  addEditor(emailAddress: string): gas$Drive$File;
  addEditor(user: gas$Drive$User): gas$Drive$File;
  addEditors(emailAddresses: string[]): gas$Drive$File;
  addViewer(emailAddress: string): gas$Drive$File;
  addViewer(user: gas$Drive$User): gas$Drive$File;
  addViewers(emailAddresses: string[]): gas$Drive$File;
  getAccess(email: string): gas$Drive$Permission;
  getAccess(user: gas$Drive$User): gas$Drive$Permission;
  getAs(contentType: gas$ContentType): gas$Blob;
  getBlob(): gas$Blob;
  getDateCreated(): Date;
  getDescription(): string;
  getDownloadUrl(): string;
  getEditors(): gas$Drive$User[];
  getId(): string;
  getLastUpdated(): Date;
  getMimeType(): string;
  getName(): string;
  getOwner(): gas$Drive$User;
  getParents(): gas$Drive$FolderIterator;
  getSharingAccess(): gas$Drive$Access;
  getSharingPermission(): gas$Drive$Permission;
  getSize(): number;
  getThumbnail(): gas$Blob;
  getUrl(): string;
  getViewers(): gas$Drive$User[];
  isShareableByEditors(): boolean;
  isStarred(): gas$Drive$File;
  isTrashed(): boolean;
  makeCopy(): gas$Drive$File;
  makeCopy(destination: gas$Drive$Folder): gas$Drive$File;
  makeCopy(name: string): gas$Drive$File;
  makeCopy(name: string, destination: gas$Drive$Folder): gas$Drive$File;
  removeCommenter(emailAddress: string): gas$Drive$File;
  removeCommenter(user: gas$Drive$User): gas$Drive$File;
  removeEditor(emailAddress: string): gas$Drive$File;
  removeEditor(user: gas$Drive$User): gas$Drive$File;
  removeViewer(emailAddresses: string[]): gas$Drive$File;
  removeViewer(user: gas$Drive$User): gas$Drive$File;
  revokePermissions(user: string): gas$Drive$File;
  revokePermissions(user: gas$Drive$User): gas$Drive$File;
  setContent(content: string): gas$Drive$File;
  setDescription(description: string): gas$Drive$File;
  setName(name: string): gas$Drive$File;
  setOwner(emailAddress: string): gas$Drive$File;
  setOwner(user: gas$Drive$User): gas$Drive$File;
  setShareableByEditors(shareable: boolean): gas$Drive$File;
  setSharing(accessType: gas$Drive$Access, permissionType: gas$Drive$Permission): gas$Drive$File;
  setStarred(starred: boolean): gas$Drive$File;
  setTrashed(trashed: boolean): gas$Drive$File;
}
