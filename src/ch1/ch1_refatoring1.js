function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];

    // 가장 먼저 수정해야 눈에 띄는 부분 Switch문 => 공연 유형에 따라 총액을 계산하는 로직
    // 분석해야만 알 수 있는 복잡한 영억 😂
    // 워드 커닝햄이 말하길 휘발성 강한 정보는 잊지 않으려면 재빨리 코드화 하여야한다.
    // let thisAmount = 0;
    // switch (play.type) {
    //   case "tragedy":
    //     thisAmount = 40000;
    //     if (perf.audience > 30) {
    //       thisAmount += 1000 * (perf.audience - 30);
    //     }
    //     break;
    //   case "comedy":
    //     thisAmount = 30000;
    //     if (perf.audience > 20) {
    //       thisAmount += 10000 + 500 * (perf.audience - 20);
    //     }
    //     thisAmount += 300 * perf.audience;
    //     break;
    //   default:
    //     throw new Error(`알 수 없는 장르 : ${play.type}`);
    // }
    // 이상 첫 번째 리팩터링 영역 => 나중에 참조하기 쉽도록 '함수 추출하기 => For'란 이름을 붙여주자

    let thisAmount = amountFor(perf, play); // 추출한 함수를 이용해 값을 채운다.

    volumeCredits += Math.max(perf.audience - 30, 0);
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    result += `${play.name} : ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;
}

// 리팩터링 부분 함수 추출!
// function amountFor(perf, play) {
//   let thisAmount = 0; // 변할 수 있는 변수를 초기화해주는 부분이라 이곳으로 가져옴

//   switch (play.type) {
//     case "tragedy":
//       thisAmount = 40000;
//       if (perf.audience > 30) {
//         thisAmount += 1000 * (perf.audience - 30);
//       }
//       break;
//     case "comedy":
//       thisAmount = 30000;
//       if (perf.audience > 20) {
//         thisAmount += 10000 + 500 * (perf.audience - 20);
//       }
//       thisAmount += 300 * perf.audience;
//       break;
//     default:
//       throw new Error(`알 수 없는 장르 : ${play.type}`);
//   }
//   return thisAmount; // 함수 안에서 값이 바뀌는 변수이므로 조심히 다루어야하며 이곳에서는 다행이 하나뿐이라 반환하게 해줌
// }

// function amountFor(perf, play) {
//   let result = 0; // 명확한 변수명으로 변경하기 1단계
//   // 저자는 반환하는 값에 있어서는 변수명을 무조건 result로 짓는다고 한다.

//   switch (play.type) {
//     case "tragedy":
//       result = 40000;
//       if (perf.audience > 30) {
//         result += 1000 * (perf.audience - 30);
//       }
//       break;
//     case "comedy":
//       result = 30000;
//       if (perf.audience > 20) {
//         result += 10000 + 500 * (perf.audience - 20);
//       }
//       result += 300 * perf.audience;
//       break;
//     default:
//       throw new Error(`알 수 없는 장르 : ${play.type}`);
//   }
//   return result;
// }

function amountFor(aPerformance, play) {
  // 명확하게 전달되는 매개변수의 명을 새로 지었다.
  // ❗️ TIP❗️ 저자는 명확하게 역할이 들어나지 않은 매개변수의 이름에 [부정관사(a, an)]을 붙인다고한다.
  let result = 0;

  switch (play.type) {
    case "tragedy":
      result = 40000;
      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;
      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르 : ${play.type}`);
  }
  return result;
}
