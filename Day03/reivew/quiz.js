// 1. 어떤숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
// 2. 어떤숫자를 넣으면 5배수이면 5의 배수 아니면 5의 배수가 아님을 함수
// 3. 어떤숫자를 넣으면 1-일반팝콘, 2-캬라멜 팝콘, 3-치즈팝콘, 그외 그런거 없음을 돌려주는 함수
// 4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수 ex)사탕, 떡볶이, 멜론
/// -> [사탕, 떡볶이, 멜론]

// const nnn = Number(prompt("숫자입력(홀/짝"));
// const a = nnn % 2;
// if (a == 1) {
//   console.log("홀수입니다");
// } else {
//   console.log("짝수입니디ㅏ");
// }

function oddEven(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

// 2. 어떤숫자를 넣으면 5배수이면 5의 배수 아니면 5의 배수가 아님을 함수
// const n1 = Number(prompt("숫자입력(5의 배수)"));
// const b = n1 % 5;
// if (b == 0) {
//   console.log("5의 배수임");
// } else {
//   console.log("5의 배수아님");
// }

function isFiveTime(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}

// 3. 어떤숫자를 넣으면 1-일반팝콘, 2-캬라멜 팝콘, 3-치즈팝콘,
// 그외 그런거 없음을 돌려주는 함수

// const aaa = Number(prompt("숫자입력3(팝콘)"));
// if (aaa == 1) {
//   console.log("일반팝콘");
// } else if (aaa == 2) {
//   console.log("캬라멜 팝콘");
// } else if (aaa == 3) {
//   console.log("치즈팝콘");
// } else console.log("다시입력하셈");

// function popcorn(x) {
// if(x==1){
//console.log("일반팝콘")}
// else if (x==2)
// {}
// } ...
//ㄴ이런식으로적으면
// 콘솔로그로 쓰면 팝콘문자만 원하는거고 콘솔로 출력까지 해준다는게 됌
// 그래서 순수성에 위배됨 아웃풋이 없어서 / 앞으로는 function을 사용하면 console은 노노~~

//근데 리턴으로 적기

function popcorn(x) {
  if (x == 1) {
    return "일반팝콘";
  } else if (x == 2) {
    return "캬라멜 팝콘";
  } else if (x == 3) {
    return "치즈팝콘";
  } else {
    return "그런팝콘없음";
  }
}

function popcorn2(x) {
  return `${x} 팝콘`;
}
// ㄴ 어떠한 팝콘으로 나오게 해주세요 할때 이렇게..

function popcorn(x) {
  const menu = {
    1: "일반 팝콘",
    2: "캬라멜 팝콘",
    3: "치즈 팝콘",
  };
  const a = undefined || "그런거없음";
}

// 4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수 ex)사탕, 떡볶이, 멜론
/// -> [사탕, 떡볶이, 멜론]
function stringToArray(a, b, c) {
  return [a, b, c];
}

// 어떠한 과일이름을 넣으면 ~~맛 아이스크림을 돌려주는 함수
function fruit(x) {
  return `${x}맛 아이스크림`;
}

function fruitArray(a, b, c) {
  return [a, b, c];
}

// function oddEven1(x) {
//   if (x % 2 == 1) {
//     return;
//   }
// }

function oddEven1(x) {
  return x % 2 == 1;
}
