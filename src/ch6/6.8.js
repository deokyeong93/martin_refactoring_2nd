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

function readingOutsideRange(station, min, max) {
  return station.radings //
    .filter((r) => r.temp < min || r.temp > max);
}

const alerts = readingOutsideRange(
  station,
  operationPlan.temperatureFloor,
  operationPlan.temperatureCeiling
);

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
