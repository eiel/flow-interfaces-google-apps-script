// @flow
// @see https://developers.google.com/apps-script/reference/optimization/linear-optimization-solution

interface gas$LinearOptimizationSolution {
  getObjectiveValue(): number;
  getStatus(): gas$LinerOptimization$Status;
  getVariableValue(variableName: string): number;
  isValid(): boolean;
}
