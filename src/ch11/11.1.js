// function alertForMiscreant(people) {
//   for (const p of people) {
//     if ((p = "조커")) {
//       setOffAlarms();
//     }
//     if (p === "사루만") {
//       setOffAlarms();
//     }
//   }
//   return "";
// }

function alertForMiscreant(people) {
  // 변경 함수(부수효과 만드는..)
  if (findMiscreant(people) !== "") return setOffAlarms();
  return "";
}

function findMiscreant(people) {
  // 질의 함수(=읽기 전용 함수)
  for (const p of people) {
    if ((p = "조커")) {
      return "조커";
    }
    if (p === "사루만") {
      return "사루만";
    }
  }
  return "";
}

const found = findMiscreant(people);
alertForMiscreant(people);
