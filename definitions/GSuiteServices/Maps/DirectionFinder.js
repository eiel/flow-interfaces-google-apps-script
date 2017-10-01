// @flow
// @see https://developers.google.com/apps-script/reference/maps/direction-finder

interface gas$Maps$DirectionFinder {
  addWaypoint(latitude: number, longitude: number): gas$Maps$DirectionFinder;
  addWaypoint(address: string): gas$Maps$DirectionFinder;
  clearWaypoints(): gas$Maps$DirectionFinder;
  getDirections(): Object;
  setAlternatives(useAlternatives: boolean): gas$Maps$DirectionFinder;
  setArrive(time: Date): gas$Maps$DirectionFinder;
  setAvoid(avoid: string): gas$Maps$DirectionFinder;
  setDepart(time: Date): gas$Maps$DirectionFinder;
  setDestination(latitude: number, longitude: number): gas$Maps$DirectionFinder;
  setDestination(address: string): gas$Maps$DirectionFinder;
  setLanguage(language: string): gas$Maps$DirectionFinder;
  setMode(mode: string): gas$Maps$DirectionFinder;
  setOptimizeWaypoints(optimizeOrder: boolean): gas$Maps$DirectionFinder;
  setOrigin(latitude: number, longitude: number): gas$Maps$DirectionFinder;
  setOrigin(address: string): gas$Maps$DirectionFinder;
  setRegion(region: string): gas$Maps$DirectionFinder;
}
