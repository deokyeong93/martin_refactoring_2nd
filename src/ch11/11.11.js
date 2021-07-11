let totalAmount = 0;
let totalTime = 0;
let totalDistance = 0;

// calculateAscent(); 이렇게만 해두면 외부 환경과 어떻게 연결이 되어있는지 추적이 불가능하다.
const totalAscent = calculateAscent();
const calculateTime = calculateTime();
const calculateDistance = calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
  let result = 0; // 외부 참조가 아닌 블록 단위의 참조 방식이 중요!! 질의 함수 방식으로 값을 리턴하여 그 값을 외부에 같은 스콥의 변수에 전달하는 편이 안전하고 좋음
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}
