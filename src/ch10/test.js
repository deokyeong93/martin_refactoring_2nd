class Seat {
  constructor(laptop) {
    this._laptop = laptop;
  }
  /* blah blah */
  get laptop() {
    return isInvalid(this._laptop) ? new UnknownLaptop() : this._laptop;
  }
}

class UnknownLaptop {

  get model {
    return "NonExistingModel";
  }

  get price {
    return 0;
  }

  get accessoryCount() {
    return 0;
  }
}

class Laptop {
  constructor(model, price, accessory) {
    this._model = model;
    this._price = price;
    this._accessory = accessory;
  }
  get model() {
    return this._model;
  }
  set price(price) {
    this._price = price;
  }
  get price() {
    return 999;
  }
  get accessory () {
    return this._accessory;
  }
  get accessoryCount() {
    return this.accessory.count;
  }
}

function isInvalid(aLaptop) {
  if (!(aLaptop instanceof Laptop || aLaptop === "invalid")) {
    throw new Error("잘못된 인자 투입");
  }
  return aLaptop === "invalid";
}

function usecase1(seat) {
  const laptop = seat.laptop;

  return laptop.model;
}

function usecase2(seat) {
  const laptop = seat.laptop;

  return laptop.price;
}

function usecase3(seat) {
  const laptop = seat.laptop;

  return laptop.price;
}

function usecase4(seat) {
  const laptop = seat.laptop;

  return laptop.accessoryCount;
}
