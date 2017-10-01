// @flow
// @see https://developers.google.com/apps-script/reference/maps/elevation-sampler

interface gas$Maps$ElevationSampler {
  sampleLocation(latitude: number, longitude: number): Object;
  sampleLocations(points: number[]): Object;
  sampleLocations(encodedPolyline: string): Object;
  samplePath(points: number[], numSamples: gas$Integer): Object;
  samplePath(encodedPolyline: string, numSamples: gas$Integer): Object;
}
