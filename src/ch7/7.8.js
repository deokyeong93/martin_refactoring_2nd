class Person {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }

  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get manager() {
    return this.department.manager;
  }
}

class Department {
  constructor(chargeCode, manager) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }

  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

let aPerson = new Person("더수", new Department(1234, "부장"));

let manager = aPerson.department.manager;
