let siteOne = {
  name: "애크미 보스턴",
  location: "Malden MA",
  customer: {
    name: "애크미 산업",
    billingPlan: "plan-451",
    paymentHistory: {
      weeksDelinquentInLastYear: 7,
    },
  },
};

let siteTwo = {
  name: "물류창고 5",
  location: "Maldone MA",
  customer: "미확인 고객",
};

function isUnknown(aCustomer) {
  if (aCustomer === "미확인 고객") return true;
  else return aCustomer.isUnknown;
}

function enrichSite(aSite) {
  const result = _.cloneDeep(aSite);
  const UnknownCustomer = {
    isUnknown: true,
    name: "거주자",
    billingPlans: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };

  if (isUnknown(result.customer)) result.customer = UnknownCustomer;
  else result.customer.isUnknown = false;
}

{
  // 클라이언트 1
  const rawSite = acquireSiteDate();
  const site = enrichSite(rawSite);
  const aCustomer = site.customer;

  const customerName = aCustomer.name;
}

{
  // 클라이언트 2
  const plan = aCustomer.billingPlan;
}

{
  // 클라이언트 3
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
