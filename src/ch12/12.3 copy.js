class Party {
  constructor (name){
    this._name = name;
  }
}

class Employee extends Party {
  constructor(id , monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  // 생략
}

class Department extends Party {
  constructor(staff) {
    super(name);
    this._staff = staff;
  }
  // 생략
}