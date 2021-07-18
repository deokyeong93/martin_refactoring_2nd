class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode;
  }

  get name () {
    return this._name;
  }

  get genderCode() {
    return this._genderCode;
  }

  get isMale() {
    return "M" === this._genderCode;
  }
}

//클라이언트
const numberOfMales = people.filter(p => p.isMale).length;

// function createPerson(name) {
//   return new Person(name) 생성하는 곳에서 집적 사용될 확률이 높은 코드
// }
// function createMale(name){
//   return new Male(name)
// }
// function createFemale(name){
//   return new Female(name)
// }

// function loadFromInput(data) {
//   const result = [];
//   data.forEach(aRecoard => {
//     let p;
//     switch (aRecoard.gender) {
//       case 'M':p = new Male(aRecoard.name); break;
//       case 'F': p = new Female(aRecoard.name); break;
//       default: p = new Person(aRecoard.name); break;
//     }
//     result.push(p);
//   })
//   return result;
// }

function createPerson(aRecoard) {
  switch (aRecoard.gender) {
    case 'M':
      return Person(aRecoard.name, "M");
    case 'F': 
      return Person(aRecoard.name, "F");
    default: 
      return Person(aRecoard.name, "X");
  }
}

function loadFromInput(data) {
  return data.map(aRecoard => createPerson(aRecoard))
}

function isMale(aPerson) {
  return aPerson instanceof Male;
}