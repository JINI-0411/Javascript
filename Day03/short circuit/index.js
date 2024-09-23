// function popcorn(x) {
//     const menu = {
//       1: "일반 팝콘",
//       2: "캬라멜 팝콘",
//       3: "치즈 팝콘",
//     };
//     const a = undefined || "그런거없음";
//   }

// short circuit

// ||[or]
const a = 1 > 3 || 5 > 2; // true // 하나만 진실이면 진실이기 때문에 ||(or)로 true임
const b = undefined || "자바스크립트"; // 위를 아래로 대입해서보면 자바가 트루시하기때문에 자바가 나옴

const username = prompt("유저 이름 입력"); // 아무것도 입력안하면 빈문자열나옴
alert(`${username || "Guest"}님 환영합니다.`); // 아무것도 입력안하면 게스트님환영이 나옴

// &&{and}
const c = true && true; //true
// const c = true && "탕수육" // 탕수육
const d = false && "탕후루"; // false

const isLoggin = prompt("비밀번호 입력하셈") == "1234";
isLoggin && alert("주인님ㅎㅇ"); // 비밀번호가 맞으면 주인님ㅎㅇ라는 팝업창이 뜰것임
