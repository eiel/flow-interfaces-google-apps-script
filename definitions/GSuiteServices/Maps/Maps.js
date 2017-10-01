// @flow
// @see https://developers.google.com/apps-script/reference/maps/maps

interface gas$Maps$Maps {
  +DirectionFinder: gas$Maps$DirectionFinderEnums;
  +StaticMap: gas$Maps$StaticMapEnums;

  decodePolyline(polyline: string): number[];
  encodePolyline(points: number[]): String;
  newDirectionFinder(): gas$Maps$DirectionFinder;
  newElevationSampler(): gas$Maps$ElevationSampler;
  newGeocoder(): gas$Maps$Geocoder;
  newStaticMap(): gas$Maps$StaticMap;
  setAuthentication(clientId: string, signingKey: string): void;
}
