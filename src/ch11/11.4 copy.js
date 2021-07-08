const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if(!aPlan.withinRange(low, high)) {
  alerts.plus("방 온도가 지정 범위를 벗어났습니다.")
}

class HeatingPlan {

  // 원하는 인터페이스를 갖춘 빈 메서드 만들기
  xxNewwithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
  }

  withinRange(bottom, top) {
    return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
  }
}