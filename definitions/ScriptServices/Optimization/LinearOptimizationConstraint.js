// @flow
// @see https://developers.google.com/apps-script/reference/optimization/linear-optimization-constraint

interface gas$LinearOptimizationConstraint {
  setCoefficient(variableName: string, coefficient: number): gas$LinearOptimizationConstraint;
}
