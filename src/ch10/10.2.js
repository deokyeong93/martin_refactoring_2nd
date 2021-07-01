function disabilityAmount(anEmployee) {
  if (isNotEligibleForDisability()) {
    return 0;
  }
  //장애 수단 계산
}

function isNotEligibleForDisability() {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthDisabled > 12 ||
    anEmployee.isPartTime
  );
}
