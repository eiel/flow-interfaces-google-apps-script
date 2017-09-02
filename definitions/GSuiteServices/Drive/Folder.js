// @flow
// @see https://developers.google.com/apps-script/reference/drive/folder

interface gas$Drive$Folder {
  addEditor(emailAddress: string): gas$Drive$Folder;
  addEditor(user: gas$Drive$User): gas$Drive$Folder;
  addEditors(emailAddresses: string[]): gas$Drive$Folder;
  addFile(child: gas$Drive$File): gas$Drive$Folder;
  addFolder(child: gas$Drive$Folder): gas$Drive$Folder;
  addViewer(emailAddress: string): gas$Drive$Folder;
  addViewer(user: gas$Drive$User): gas$Drive$Folder;
  addViewers(emailAddresses: string[]): gas$Drive$Folder;
  createFile(blob: gas$BlobSource): gas$Drive$File;
  createFile(name: string, content: string): gas$Drive$File;
  createFile(name: string, content: string, mimeType: string): gas$Drive$File;
  createFolder(name: string): gas$Drive$Folder;
  getAccess(email: string): gas$Drive$Permission;
  getAccess(user: gas$Drive$User): gas$Drive$Permission;
  getDateCreated(): Date;
  getDescription(): string;
  getEditors(): gas$Drive$User[];
  getFiles(): gas$Drive$FileIterator;
  getFilesByName(name: string): gas$Drive$FileIterator;
  getFilesByType(mimeType: string): gas$Drive$FileIterator;
  getFolders(): gas$Drive$Folder;
  getFoldersByName(name: string): gas$Drive$FolderIterator;
  getId(): string;
  getLastUpdated(): Date;
  getName(): string;
  getOwner(): gas$Drive$User;
  getParents(): gas$Drive$FolderIterator;
  getSharingAccess(): gas$Drive$Access;
  getSharingPermission(): gas$Drive$Permission;
  getSize(): number;
  getUrl(): string;
  getViewers(): gas$Drive$User[];
  isShareableByEditors(): boolean;
  isStarred(): gas$Drive$Folder;
  isTrashed(): boolean;
  removeEditor(emailAddress: string): gas$Drive$Folder;
  removeEditor(user: gas$Drive$User): gas$Drive$Folder;
  removeFile(child: gas$Drive$File): gas$Drive$Folder;
  removeFolder(child: gas$Drive$Folder): gas$Drive$Folder;
  removeViewer(emailAddresses: string[]): gas$Drive$Folder;
  removeViewer(user: gas$Drive$User): gas$Drive$Folder;
  revokePermissions(user: string): gas$Drive$Folder;
  revokePermissions(user: gas$Drive$User): gas$Drive$Folder;
  searchFiles(params: string): gas$Drive$FileIterator;
  searchFolders(params: string): gas$Drive$FolderIterator;
  setDescription(description: string): gas$Drive$Folder;
  setName(name: string): gas$Drive$Folder;
  setOwner(emailAddress: string): gas$Drive$Folder;
  setOwner(user: gas$Drive$User): gas$Drive$Folder;
  setShareableByEditors(shareable: boolean): gas$Drive$Folder;
  setSharing(accessType: gas$Drive$Access, permissionType: gas$Drive$Permission): gas$Drive$Folder;
  setStarred(starred: boolean): gas$Drive$Folder;
  setTrashed(trashed: boolean): gas$Drive$Folder;
}
