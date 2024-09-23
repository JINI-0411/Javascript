// 유저에게 비밀번호 설정을 물어보고,
// 비밀번호가 it, IT를 포함하면 비밀번호 설정완료/ 아니면 비밀번호 설정오류!
const pass = prompt("비밀번호어떻게 됌?"); // number는 빼야함

const password1 = pass.includes("it"); // includes 는 하나씩
const password2 = pass.includes("IT");
password1 || password2
  ? alert("비밀번호 설정완료")
  : alert("비밀번호 설정오류");

//const a = "it" || "IT" 는 it가 나옴 서킷원리로...

// const password = prompt("비밀번호 설정완료");
// const isPass = password.includes("it") || password.includes("IT");
// const msg = isPass ? "비밀번호 설정완료" : "비밀번호 설정오류";
// alert(msg);

// 1. 유저에게 좋아하는 음식을 입력 받고, 그 음식을 5번 출력하는 프로그램
// 2.  유저에게 좋아하는 음식과 횟수를 입력받고 그 음식을 횟수번 만큼 출력하는 프로그램
// ex ) 떡볶이 5 -> 떡볶이떡볶이떡볶이떡볶이떡볶이
// 3. 유저에게 알파벳 단어를 입력 받고, 6글자보다 작으면 소문자화 하고,
//    크면 대문자화 해서 출력

const userFood = prompt("좋아하는 음식모야?");
const five = userFood.repeat(5);
alert(five);

const foodNum = prompt("좋아하는 음식과 횟수"); // 떡볶이 5
const arr = foodNum.split(" "); // ["떡볶이", "5"];
const myFood = arr[0]; // "떡볶이"
const count = Number(arr[1]); // 5 넘버를 붙여야 숫자5가 나옴
alert(myFood.repeat(count));

const alpha = prompt("알파벳 단어 입력");
const is6under = alpha.length < 6;
const result = is6under ? alpha.toLowerCase() : alpha.toUpperCase();
alert(result);

const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.
No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

alert(news.split(" ")); // 단어끼리 나누고 싶을 때

// 1. 유저에게 단어를 입력받고, 소문자이면 대문자로, 대문자면 소문자로
// 예) happy -> HAPPY , SAD -> SAD

// 2. 유저에게 비밀번호 설정을 물어보고
// -1. 길이가 8~20가 아니면 비밀번호 길이 오류
// -2. 시작이 it, IT로 시작안하면 시작은 it,IT로 시작해야함
// -3. 특수문자 &#@!중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
// 위에 조건이 모두 통과되면 비밀번호 설정완료

//===========================================================
// const word = prompt("단어입력햐")

// const it1 = word.startsWith("it")
// const it2 = word.startsWith("IT")

// const special = word.includes("&","#","@","!")

// != "비밀번호에 반드시 특수문자 넣어야함"

//===========================================================
const word = prompt("단어입력햐");
// 대문자로 넣은거랑 같니? 아니면 대문자화시키고 아니면 소문자화
const result1 =
  word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
alert(result1);

const pw = prompt("비밀번호 설정");
const isLengthValid = 8 <= pw.length && pw.length <= 20;
const isStartIT = pw.startsWith("it") || pw.startsWith("IT");
const hasSpecialChar =
  pw.includes("&") || pw.includes("#") || pw.includes("@") || pw.includes("!");

if (!isLengthValid) {
  alert("비밀번호 길이 오류!");
} else if (!isStartIT) {
  alert("비밀번호 시작은 it, IT 로 시작해야함");
} else if (!hasSpecialChar) {
  alert("비밀번호에 반드시 특수문자 넣어야함");
} else {
  alert("비밀번호 설정 완료!");
}
