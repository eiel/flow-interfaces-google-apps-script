// @flow
// @see https://developers.google.com/apps-script/reference/optimization/linear-optimization-service

interface gas$LinearOptimizationService {
  +Status: gas$LinerOptimization$Enum$Status;
  +VariableType: gas$LinerOptimization$Enum$VariableType;

  createEngine(): gas$LinearOptimizationEngine;
}

declare var LinearOptimizationService: gas$LinearOptimizationService;
