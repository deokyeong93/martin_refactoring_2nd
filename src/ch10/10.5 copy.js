class Site {
  get custormer() {
    return this._customer === "미확인 고객"
      ? new UnknownCustomer()
      : this._customer;
  }
}

class Customer {
  get name() {} // 고객 이름
  get billingPlan() {} // 요금제
  set billingPlan(arg) {}
  get paymentHistory() {} // 납부 이력
  get isUnknown() {
    return false;
  }
}

class UnknownCustomer {
  get name() {
    return "거주자";
  }

  get isUnknown() {
    return true;
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }

  set billingPlan(arg) {
    // 아무일도 없음
  }

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) {
    throw new Error(`잘못된 값과 비교 : <${arg}>`);
  }
  return arg.isUnknown;
}

const aCustomer = site.custormer;
{
  // 클라이언트 1
  const customerName = aCustomer.name;
}

{
  // 클라이언트 2
  const plan = aCustomer.billingPlan;
}

{
  // 클라이언트 3
  aCustomer.billingPlan = newPlan;
}

{
  // 클라이언트 4
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
