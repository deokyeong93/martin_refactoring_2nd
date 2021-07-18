// function createBird(data) {
//   switch(data.type) {
//     case '노르웨이 파랑 앵무':
//       return new NorwegianBlueParrot(data);
//     default:
//       return new Bird(data);
//   }
// }

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage =data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data, this);
  }

  get name() {
    return this._name;
  }

  get plumage() {
    return  this._speciesDelegate.plumage
  }

  get airSpeedVelocity() {
    return  this._speciesDelegate.airSpeedVelocity;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data.voltage;
    this._isNaild = data.isNaild;
  }
  
  get plumage() {
    if(this._voltage > 100) return "그을렸다";
    else return this._plumage || "예쁘다"
  }

  get airSpeedVelocity() {
    return this._isNaild ? 0 : 10 + this._voltage / 10;
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate{
  constructor(data, bird) {
    super(data, bird)
  }
  
  get airSpeedVelocity() {
    return 35;
  }
}

class AfricaSwallowDelegate extends SpeciesDelegate{
  constructor (data, bird) {
    super(data , bird)
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  
  get airSpeedVelocity() {
    return 40 -2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate{
  constructor(data, bird) {
    super(data)
    this._bird = bird;
    this._voltage = data.voltage;
    this._isNaild = data.isNaild;
  }
  
  get plumage() {
    if(this._voltage > 100) return "그을렸다";
    else return this._bird._plumage || "예쁘다"
  }

  get airSpeedVelocity() {
    return this._isNaild ? 0 : 10 + this._voltage / 10;
  }
}

class SpeciesDelegate {
  constructor(data , bird){
    this._bird = bird;
  }

  get plumage() {
    return this._bird.plumage || "보통이다.";
  }

    
  get airSpeedVelocity() {
    return null;
  }
}



function selectSpeciesDelegate(data, this) {
  switch(data.type){
    case '유럽 제비':
      return new EuropeanSwallowDelegate(data, this);
    case '아프리카 제비':
      return new AfricaSwallowDelegate(data, this);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrotDelegate(data, this);
    default : return new SpeciesDelegate(data, this);
  }
}