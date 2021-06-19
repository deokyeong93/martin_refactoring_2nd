class Person {
  constructor(name, areaCode, number) {
    this._name = name;
    this._telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }
  get areaCode() {
    return this._telephoneNumber.areaCode;
  }
  set areaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get number() {
    return this._telephoneNumber.number;
  }
  set number(arg) {
    this._telephoneNumber.number = arg;
  }
}

class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  toString() {
    return `(${this.areaCode} ${this.number}`;
  }

  get areaCode() {
    return this._areaCode;
  }
  set areaCode(arg) {
    this.areaCode = arg;
  }
  get number() {
    return this._number;
  }
  set areaCode(arg) {
    this._number = arg;
  }
  get telephonenumber() {
    return `${this.areaCode} ${this.number}`;
  }
}
