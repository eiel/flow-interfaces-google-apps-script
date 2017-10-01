// @flow
// @see https://developers.google.com/apps-script/reference/maps/static-map

interface gas$Maps$StaticMap {
  addAddress(address: string): gas$Maps$StaticMap;
  addMarker(latitude: number, longitude: number): gas$Maps$StaticMap;
  addMarker(address: string): gas$Maps$StaticMap;
  addPath(points: number[]): gas$Maps$StaticMap;
  addPath(polyline: string): gas$Maps$StaticMap;
  addPoint(latitude: number, longitude: number): gas$Maps$StaticMap;
  addVisible(latitude: number, longitude: number): gas$Maps$StaticMap;
  addVisible(address: string): gas$Maps$StaticMap;
  beginPath(): gas$Maps$StaticMap;
  clearMarkers(): gas$Maps$StaticMap;
  clearPaths(): gas$Maps$StaticMap;
  clearVisibles(): gas$Maps$StaticMap;
  endPath(): gas$Maps$StaticMap;
  getAs(contentType: gas$ContentType): gas$Blob;
  getBlob(): gas$Blob;
  getMapImage(): gas$Byte[];
  getMapUrl(): string;
  setCenter(latitude: number, longitude: number): gas$Maps$StaticMap;
  setCenter(address: string): gas$Maps$StaticMap;
  setCustomMarkerStyle(imageUrl: string, useShadow: boolean): gas$Maps$StaticMap;
  setFormat(format: string): gas$Maps$StaticMap;
  setLanguage(language: string): gas$Maps$StaticMap;
  setMapType(mapType: gas$Maps$Type): gas$Maps$StaticMap;
  setMarkerStyle(size: gas$Maps$MarkerSize, color: string, label: string): gas$Maps$StaticMap;
  setMobile(useMobileTiles: boolean): gas$Maps$StaticMap;
  setPathStyle(weight: gas$Integer, color: string, fillColor: string): gas$Maps$StaticMap;
  setSize(width: gas$Integer, height: gas$Integer): gas$Maps$StaticMap;
  setZoom(zoom: gas$Integer): gas$Maps$StaticMap;
}
