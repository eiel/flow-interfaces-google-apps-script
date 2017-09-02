// @flow
// @see https://developers.google.com/apps-script/reference/cache/cache-service

interface gas$CacheService {
  getDocumentCache(): gas$Cache;
  getScriptCache(): gas$Cache;
  getUserCache(): gas$Cache;
}

declare var CacheService: gas$CacheService;
