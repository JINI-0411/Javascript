// 1. 출생년도를 물어보고 2005년 이하면
//      성인입니다, 아니면 미성년자입니다.

// 2. 놀이기구를 탈려고 키를 물었음
//       150cm이하면 탈수없습니다. 아니면 탈수있습니다.

// 3. 사용자로부터 10000 부터 99,999사이의 정수를 입력받아,
// 각 자리수를 분리하여 출력하는 프로그램을 작성하세요.
// 예를 들어, 입력 값이 12345라면,
// 각 자리수 1만 2천 3백 4십 5를 출력해야함

// 3. 양의 정수를 입력받고 , 분초를 바꾸는 프로그램
// 예 ) 63 -> 1분 3초, 125 -> 2분 5초

const year = Number(prompt("출생년도가 어떻게 되나요?"));
const age = year <= 2005 ? "성인입니다" : "미성년자입니다";
console.log(age);
const height = Number(prompt("키가 몇인가요?"));
const ride = height <= 150 ? "탈수없습니다" : "탈수있습니다";
console.log(ride);

//예 76 / 201
const num = Number(prompt("양의 정수 입력"));
const sec = num % 60; // 16초
const min = parseInt(num / 60); // 1.11 / 201을 넣으면 3. ..... // 3분
console.log(`${min}분 ${sec}초`);
