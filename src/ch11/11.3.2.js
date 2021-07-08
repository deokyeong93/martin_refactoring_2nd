// 플래그 함수 제거하기

function deliveryDate(anOrder, isRush) {
  let result;
    let deliveryTime;
    if(anOrder.deliveryState === "MA" || anOrder.deliveryState === "CT") 
      deliveryTime = isRush ? 1 : 2;
    else if(anOrder.deliveryState === "NY" || anOrder.deliveryState === "NH") {
      deliveryTime = 2;
      if(anOrder.deliveryState === "NH" && !isRush){
          deliveryTime = 3;
      }
    }
    else if(isRush) {
      deliveryTime = 3;
    }
    else if(anOrder.deliveryState=== "ME") {
      deliveryTime = 3;
    }
    else {
      deliveryTime = 4;
    }
    result = anOrder.placeOn.plusDays(2 + deliveryTime);
    if(isRush) result = result.minusDays(1);
    return result;
}

// 너무 복잡하여 래핑함수를 생각해볼 수 있다.

function rushDeliveryDate(anOrder) {
  return deliveryDate(anOrder, true);
}

function rushDeliveryDate(anOrder) {
  return deliveryDate(anOrder, false);
}