//operator (연산자, 토큰(상징적인거))

// arith operator(+, -, *, **, /, %) 산술연산자
const a = 1 + 1;
const a1 = 10 - 1;
const a2 = 1 * 2;
const a3 = 2 ** 3; // 제곱 연산자 [8]
const a4 = 6 / 2; // 나누기 연산자
const a5 = 8 % 3; // (몫빼고) 나머지 연산자 [2]
const a6 = -10; // 부호 반대 연산자

const a7 = "치즈" + "떡볶이"; // 문자열 연결 연산자
const a8 = 10 + "인분"; // 암묵적 타입변환 + 문자열 연결 연산
// 문자가 하나라도 있으면 암묵적으로 타입변화면서 문자열이 됌.

// 대입 연산자 (=)
const b = "롤";
const b1 = b + "망겜";

// 비교 연산자[Boolean 타입 귀결]
// (<, >, <=, >=, ==, !=)
const c = 5 > 3; // true
const c1 = 5 < 3; // false
const c2 = 5 >= 3; // true
const c3 = 5 <= 3; // false
const c4 = 1 == 1; // true
const c5 = 1 != 1; // false
const c6 = 1 === 1; // 타입까지 같니?
// ㄴ 1==="1" false
//    1===1 true

// 논리 연산자 (&&[and], ||[or], !(not))

// && [and] : 모두 true여야 true임
const d1 = 5 > 1 && 3 > 1; // true
const d2 = 5 > 1 && 5 < 1; // false

// || [or] : 하나만 true 면 true임
const d3 = 5 < 1 || 3 < 1 || 1 == 1; // true

// ! [not]
const d4 = !false; // true
const d5 = !!false; // false
const d6 = !"장원영"; // false / 트루시한 장원영이 not이 되니까 false로 나옴
//                       false 암묵적 불리언화임
const d7 = !(5 > 3 && 3 > 1); // false

// 삼항 연산자(?)
const e1 = 10 > 5 ? "아이유" : "윤하"; // 아이유
const e2 = 3 < 1 ? "안유진" : "덕선"; // 덕선
// ㄴ 앞에가 true면  : 값에서 앞에꺼가 나오고 아니면 뒤에꺼가 나옴
