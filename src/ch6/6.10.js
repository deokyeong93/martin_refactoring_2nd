let reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// 클라이언트 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// 클라이언트 2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = 

// 클라이언트 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;


function calculateBaseCharge(aReading) {
  // 기본 요금 계산 함수
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

export function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0,result.baseCharge - taxThreshold(result.year));
  return result;
}
