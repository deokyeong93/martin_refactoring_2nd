function localShippiingRules(country) {
  const data = countryData.localShippiingRules[country];
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

function calcaulateShippingCosts(anOrder) {
  //관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) return shippingRules; // 오류 전파
  // 더 관련 없는 코드
}

let status;
try {
  status = calculateShippungCosts(orderData);
} catch (error) {
  if (error instanceof OrderProcessingError)
    errorList.push({ order: orderData, errorCode: status });
  else throw e;
  //예외 처리 로직
}
if (status < 0) errorList.push({ order: orderData, errorCode: status });

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super("주문 처리 오류");
    this.code = errorCode;
  }

  get name() {
    return "OrderProcessingError";
  }
}
