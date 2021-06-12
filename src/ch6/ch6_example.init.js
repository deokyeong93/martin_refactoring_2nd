function printOwing(invoice) {
  let outStanding = 0;

  console.log("*****************");
  console.log("**** 고객 채무 ****");
  console.log("*****************");

  // 미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueDate)를 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // 세부 사항을 출력한다.
  console.log(`고객명: ${invoice.customer}`);
  console.log(`고객명: ${outStanding}`);
  console.log(`고객명: ${invoice.dueDate.toLocaleDateString()}`);
}

function reportLine(aCustomer) {
  const lines = [];
  gattherCustomerDate(lines, aCustomer);
  return lines;
}

function gattherCustomerDate(out, aCustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}

function price(order) {
  // 가격(price) = 기본가격 - 수량 할인 + 배송비;
  return (
    order.quentity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
  get basePrice() {
    return this.quentity * this.itemPrice;
  }
  get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }
  get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}

function circum(radius) {
  return 2 * Math.PI * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

class Book {
  constructor(arg) {
    this._reservations = arg.reservations;
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}

function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEngland = someCustomers.filter((c) => inNewEngland(c));
