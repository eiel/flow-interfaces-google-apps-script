// @flow
// @see https://developers.google.com/apps-script/reference/optimization/status

opaque type gas$LinerOptimization$Status = any;

interface gas$LinerOptimization$Enum$Status {
  +OPTIMAL: gas$LinerOptimization$Status;
  +FEASIBLE: gas$LinerOptimization$Status;
  +INFEASIBLE: gas$LinerOptimization$Status;
  +INFEASIBLE: gas$LinerOptimization$Status;
  +ABNORMAL: gas$LinerOptimization$Status;
  +MODEL_INVALID: gas$LinerOptimization$Status;
  +NOT_SOLVED: gas$LinerOptimization$Status;
}
