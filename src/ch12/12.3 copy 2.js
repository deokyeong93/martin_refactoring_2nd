class Party {}

class Employee {
  constructor(name) {
    this._name = name;
  }

  get isPrivileged(){
  }
  
  assignCar(){
  }

  finishCostruction() {
    if(this.isPrivileged) this.assignCar()
  }
  // 생략
}

// class Manager extends Employee {
//   constructor(name, grade){
//     super(name);
//     this._grade = grade;
//     if(this.isPrivileged) this.assignCar()
//   }

//   get isPrivileged() {
//     return this._grade > 4
//   }
// }

class Manager {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
  }
}


class Department extends Party {
  constructor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }
  // 생략
}