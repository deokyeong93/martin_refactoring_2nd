function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time : totalTime,
    distance : totalDistance,
    pace : pace
  };

  function calculateDistance() {
    let result =0
    for (let i = 0; i < points.length ; points[i]) {
      result += distance(points[i-1], points[i]);
    }
    return result
  }

  function distance(p1,p2) {} // 두 지점의 거리 계산
  function radians(degrees) {} // 라디안 값으로 변환
  function calculateTime(){} // 총 시간 계산
}

class Account {
  get bankCharge() { // 은행이자 계산
    let result = 4.5;
    if(this.daysOverDrawn > 0) {
      result +=  this.type.overdraftCharge(this); // 계산에 이용할 것이 많다면 계좌 자체의 정보를 넘긴다.
    }
    return result;
  }
}

class AccountType {
  overdraftCharge(account) { //초과 인출 이자 계산
    if(this.isPremium) {
      const baseCharge = 10;
      if(account.daysOverDrawn <=7) {
        return baseCharge;
      } else {
        return baseCharge + (account.daysOverDrawn - 7) * 0.85;
      }
    } else {
      return account.daysOverDrawn * 1.75;
    }
  }
}