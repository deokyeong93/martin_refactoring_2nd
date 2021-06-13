let reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// 클라이언트 1
const rawReading1 = acquireReading();
const aReading1 = new Reading(rawReading1);
const baseCharge1 = aReading1.baseCharge;

// 클라이언트 2
const rawReading2 = acquireReading();
const aReading2 = new Reading(rawReading2);
const baseCharge2 = aReading2.baseCharge;
const taxableCharge = aReading2.taxableCharge;

// 클라이언트 3
const rawReading3 = acquireReading();
const aReading3 = new Reading(rawReading);
const basicChargeAmount3 = aReading.baseCharge;

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
  get texableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}
