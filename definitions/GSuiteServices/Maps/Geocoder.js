// @flow
// @see https://developers.google.com/apps-script/reference/maps/geocoder

interface gas$Maps$Geocoder {
  geocode(address: string): Object;
  reverseGeocode(latitude: number, longitude: number): Object;
  reverseGeocode(swLatitude: number, swLongitude: number, neLatitude: number, neLongitude: number): Object;
  setBounds(swLatitude: number, swLongitude: number, neLatitude: number, neLongitude: number): gas$Maps$Geocoder;
  setLanguage(language: string): gas$Maps$Geocoder;
  setRegion(region: string): gas$Maps$Geocoder;
}
