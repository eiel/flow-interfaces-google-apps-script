// @flow
// @see https://developers.google.com/apps-script/reference/optimization/variable-type

opaque type gas$LinearOptimization$VariableType = any;

interface gas$LinerOptimization$Enum$VariableType {
   +INTEGER: gas$LinearOptimization$VariableType;
   +CONTINUOUS: gas$LinearOptimization$VariableType;
}
