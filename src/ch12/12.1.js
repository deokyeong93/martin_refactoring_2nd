class Party {
  get monthlyCost() {
    throw new Error("서브 클래스에 momthlyCost 게터를 구현해야해!")
  }
  
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  // get annualCost() {
  //   return this.monthlyCost * 12;
  // }
}

class Department extends Party {
  // get annualCost () {
  //   return this.monthlyCost * 12;
  // }
}

// 각 subclass의 monthlyCost를 오버라이드하지 않으면 Party의 monthly를 그대로
// 참조하기 때문에 문제가 발생한다. 다행히 의도적 에러를 발생시켜 문제를 파악하는 것이 가능