const travels = [
  {
    travelName: "Flight from ICN to LHR",
    cost: 500,
    date: new Date("2020-03-11"),
  },
  {
    travelName: "Train from LHR airport to Liverpool Street Station",
    cost: 30,
    date: new Date("2020-03-11"),
  },
];
const accomodations = [
  { site: "Goryo Hotel Bucheon", cost: 95, date: new Date("2020-03-11") },
  { site: "APoint LiverpoolStreet", cost: 100, date: new Date("2020-03-11") },
];

/**
 * 교통수단과 숙박을 출력하고 한도 내에서 환불액을 계산하는 함수
 */
function tripReimbursement() {
  const travelList = travels.map((aTravel) => new Travel(aTravel)); // 변수 추출하기
  const accomList = accomodations.map((aAccom) => new Accomodation(aAccom)); // 변수 추출하기

  printTripData(travelList, accomList);
  return totalRefundCost(travelList, accomList);
}

function printTripData(travelList, accomList) {
  // 숙박 데이터가 3개 이상으로 늘어나면 매개변수 객체 만들기를 해도 괜찮을 듯...
  // 함수 추출하기
  travelList.forEach((aTravel) => aTravel.printTarvelContent());
  accomList.forEach((aAccom) => aAccom.printAccomodationContent());
}

function totalRefundCost(travelList, accomList) {
  // 숙박 데이터가 3개 이상으로 늘어나면 매개변수 객체 만들기를 해도 괜찮을 듯...
  // 함수 추출하기
  const totalRefundCost = travelList.reduce((aTravel) => aTravel.refundCost); // 변수 추출하기
  const totalAccomRefundCost = accomList.reduce((aAccom) => aAccom.refundCost); // 변수 추출하기

  return totalRefundCost + totalAccomRefundCost;
}

class Travel {
  // 변수 캡슐화 하기
  constructor(data) {
    this._travelName = data.travelName;
    this._date = data.date;
    this._cost = data.cost;
  }

  printTarvelContent() {
    // 함수 추출하기
    console.log("=============");
    console.log(
      `You had a travel ${this.travelName} at ${this.date} at a cost of ${this.cost}`
    );
    console.log("=============");
  }

  get travelName() {
    return this._travelName;
  }
  get date() {
    return this._date;
  }
  get cost() {
    return this._cost;
  }
  get refundCost() {
    return this.cost > 100 ? 100 : this.cost;
  }
}

class Accomodation {
  // 변수 캡슐화 하기
  constructor(data) {
    this._site = data.site;
    this._cost = data.cost;
    this._date = data.date;
  }

  printAccomodationContent() {
    // 함수 추출하기
    console.log("=============");
    console.log(
      `You had a sleep in ${this.site} at ${this.date} at a cost of ${this.cost}`
    );
    console.log("=============");
  }

  get site() {
    return this._site;
  }
  get date() {
    return this._date;
  }
  get cost() {
    return this._cost;
  }
  get refundCost() {
    return this.cost > 150 ? 150 : this.cost;
  }
}

tripReimbursement();
