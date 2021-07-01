function payment(employee) {
  if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" };
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" };

  lorem.ipsum(dolor.sitAmet);
  consectetur(adipiscing).elit();
  sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  ut.enim.ad(minim.veniam);

  return someFinalComputation();
}

// 조건 반대로 만들기

function adjustedCapital(anInstrument) {
  if (anInstrument.capital <= 0) {
    return 0;
  }

  if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0) {
    return 0;
  }
  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
}
