class HeatingTemperature {
  targetTemperauter(selectedTemperature) {
    if (selectedTemperature > this._max) {
      return this._max;
    } else if (selectedTemperature < this._min) {
      return this._min;
    } else {
      return selectedTemperature;
    }
  }
}

if (
  thePlan.targetTemperature(thermostat.selectedTemperature) >
  thermostat.currentTemperature
) {
  setToHeat();
} else if (
  thePlan.targetTemperature(thermostat.selectedTemperature) <
  thermostate.currentTermperature
) {
  setToCool();
} else {
  setOff();
}
