// @flow
// @see https://developers.google.com/apps-script/reference/drive/drive-app

interface gas$Drive$DriveApp {
  +Access: gas$Drive$Enum$Access;
  +Permission: gas$Drive$Enum$Permission;

  addFile(child: gas$Drive$File): gas$Drive$Folder;
  addFolder(child: gas$Drive$Folder): gas$Drive$Folder;
  continueFileIterator(continuationToken: string): gas$Drive$FileIterator;
  continueFolderIterator(continuationToken: string): gas$Drive$FolderIterator;
  createFile(blob: gas$BlobSource): gas$Drive$File;
  createFile(name: string, content: string): gas$Drive$File;
  createFile(name: string, content: string, mimeType: string): gas$Drive$File;
  createFolder(name: string): gas$Drive$Folder;
  getFileById(id: string):  gas$Drive$File;
  getFiles():  gas$Drive$FileIterator;
  getFilesByName(name: string): gas$Drive$FileIterator;
  getFilesByType(mimeType: string):  gas$Drive$FileIterator;
  getFolderById(id: string): gas$Drive$Folder;
  getFolders(): gas$Drive$Folder;
  getFoldersByName(name: string): gas$Drive$FolderIterator;
  getRootFolder(): gas$Drive$Folder;
  getStorageLimit(): number;
  getStorageUsed(): number;
  getTrashedFiles(): gas$Drive$FileIterator;
  getTrashedFolders(): gas$Drive$FolderIterator;
  removeFile(child: gas$Drive$File): gas$Drive$Folder;
  removeFolder(child: gas$Drive$Folder): gas$Drive$Folder;
  searchFiles(params: string): gas$Drive$FolderIterator;
  searchFolders(params: string): gas$Drive$FolderIterator;
}

declare var DriveApp: gas$$Drive$DriveApp;
