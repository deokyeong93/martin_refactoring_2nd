class Site {
  get custormer() {
    return this._customer === "미확인 고객"
      ? Object.freeze(createUnknownCustomer())g
      : this._customer;
  }
}

class Cunstomer {
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}

  get isUnknown() {
    return false;
  }
}

function createUnknownCustomer() {
  return {
    isUnknown: true,
    name: "거주자",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

const aCustomer = site.custormer;
{
  let customerName = aCustomer.name;
}

{
  // 클라이언트 2
  const plan = aCustomer.billingPlan;
}

{
  // 클라이언트 3
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
