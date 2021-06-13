const station = {
  name: "ZB1",
  readings: [
    { temp: 47, tune: "2016-11-10 09:10" },
    { temp: 53, tune: "2016-11-10 09:20" },
    { temp: 58, tune: "2016-11-10 09:30" },
    { temp: 53, tune: "2016-11-10 09:40" },
    { temp: 51, tune: "2016-11-10 09:50" },
  ],
};

operationPlan = {
  temperatureFloor: 18,
  temperatureCeiling: 52,
};

function readingOutsideRange(station, range) {
  return station.radings //
    .filter((r) => r.temp < range.min || r.temp > range.max);
}

const range = new NumberRange(
  operationPlan.temperatureFloor,
  operationPlan.temperatureCeiling
);

const alerts = readingOutsideRange(station, range);

class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}
