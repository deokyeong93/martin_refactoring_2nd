// 플래그 함수 제거하기

// aShipment.deliveryDate = deliveryDate(anOrder, true);
// aShipment.deliveryDate = deliveryDate(anOrder, false);


aShipment.deliveryDate = rushDeliveryDate(anOrder);
aShipment.deliveryDate = regularDeliveryDate(anOrder);

// function deliveryDate(anOrder, isRush) {
//   if(isRush) {
//     let deliveryTime;
//     if(["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
//     else if(["NY", "NH"].includes(anOrder.deliveryState))deliveryTime = 2;
//     else deliveryTime = 3;
//     return anOrder.placeOn.plusDays(1 + deliveryTime);
//   } else {
//     let deliveryTime;
//     if(["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
//     else if(["ME", "NH"].includes(anOrder.deliveryState))deliveryTime = 3;
//     else deliveryTime = 4;
//     return anOrder.placeOn.plusDays(2 + deliveryTime);
//   }
// }

function deliveryDate(anOrder, isRush) {
  if(isRush) return rushDeliveryDate(anOrder);
  else return regularDeliveryDate(anOrder)
}

function rushDeliveryDate(anOrder) {
  let deliveryTime;
    if(["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if(["NY", "NH"].includes(anOrder.deliveryState))deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placeOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
  let deliveryTime;
  if(["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
  else if(["ME", "NH"].includes(anOrder.deliveryState))deliveryTime = 3;
  else deliveryTime = 4;
  return anOrder.placeOn.plusDays(2 + deliveryTime);
}

// 예시 2 번

