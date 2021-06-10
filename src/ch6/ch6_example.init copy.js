function printOwing(invoice) {
  
  printBanner();
  
  // 미해결 채무(outstanding)를 계산한다.

  // let outStanding = calculateOutstanding(invoice)
  const outStanding = calculateOutstanding(invoice)

  // 마감일(dueDate)를 기록한다.
  recoardDueDate(invoice);

  // 세부 사항을 출력한다.
  printDetails(invoice, outStanding);
}

function printBanner() {
  console.log("*****************");
  console.log("**** 고객 채무 ****");
  console.log("*****************");
}

function printDetails(invoice. outStanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`고객명: ${outStanding}`);
  console.log(`고객명: ${invoice.dueDate.toLocaleDateString()}`);
}

function recoardDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

// function calculateOutstanding(invoice) {
//   let outStanding = 0;
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }
//   return outStanding;
// }

function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
      result += o.amount;
    }
    return result;
}


function reportLine(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}

function price(order) {
  // 가격(price) = 기본가격 - 수량 할인 + 배송비;
  const basePrice = order.quentity * order.itemPrice; 
  const quantityDiscount = Math.max(0, order.quantity - 500)* order.itemPrice * 0.05 
  const shipping  =   Math.min(order.quantity * order.itemPrice * 0.1, 100);
  
  return basePrice - quantityDiscount + shipping;
}


