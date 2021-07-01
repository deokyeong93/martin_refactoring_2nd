const { assertUpdateExpression } = require("babel-types/ts3.6");

// if (summer()) {
//   charge = summerCharge();
// } else {
//   charge = regularCharge();
// }

charge = summer() ? summerCharge() : regularCharge();

function summer() {
  !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
  return quantity * plan.summerRate;
}

function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}
