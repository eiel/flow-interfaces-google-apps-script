// @flow
// @see https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine

interface gas$LinearOptimizationEngine {
  addConstraint(lowerBound: number, upperBound: number): gas$LinearOptimizationConstraint;
  addVariable(name: string, lowerBound: number, upperBound: number): gas$LinearOptimizationEngine;
  addVariable(name: string, lowerBound: number, upperBound: number, type: gas$LinearOptimization$VariableType): gas$LinearOptimizationEngine;
  addVariable(name: string, lowerBound: number, upperBound: number, type: gas$LinearOptimization$VariableType, objectiveCoefficient: number): gas$LinearOptimizationEngine;
  setMaximization(): gas$LinearOptimizationEngine;
  setMinimization(): gas$LinearOptimizationEngine;
  setObjectiveCoefficient(variableName: string, coefficient: number): gas$LinearOptimizationEngine;
  solve(): gas$LinearOptimizationSolution;
  solve(seconds: number): gas$LinearOptimizationSolution;

}
