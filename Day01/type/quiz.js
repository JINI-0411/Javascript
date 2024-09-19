// const first = Number(prompt("첫번째 숫자 입력"));
// const second = prompt("두번째 숫자 입력");
// // const sum = Number(first) + Number(second);
// // console.log(`두수의 합은 ${sum}입니다`);

// console.log(`두수의 합은 ${Number(first) + Number(second)}입니다`);

//ask : prompt , answer : console
// 1. 한변의 길이를 물어보고,  정사각형의 넓이와 둘레 알려주기
// 2. 밑변과 높이를 물어보고, 정삼각형의 넓이 구하기
// 3. 반지름을 물어보고, 원의 넓이 와 둘레 구하기
// 4. 출생년도를 물어보고 나이를 나타내기 예) 몇년생임? 1995 > 30
// 5. 일본여행 갈거임 그래서 100만원 환전하면 현재 환율로 엔화 나타내기
// 예) 얼마 환전? > 1000000 >> 107451

const side = Number(prompt("정사각형의 한 변의 길이는 몇 입니까?"));
const extent = Number(side * side);
const circum = Number(side * 4);
console.log(`${side}으로 한 정사각형의 넓이는${extent}cm^2 입니다`);
console.log(`${side}으로 한 정사각형의 둘레는${circum}cm 입니다`);

const under_line = Number(prompt("정삼각형의 밑변은 얼마입니까?"));
const hight = Number(prompt("정삼각형의 높이는 얼마입니까?"));
const sum = Number((under_line * hight) / 2);
console.log(
  `${under_line}밑변과 높이${hight}으로 한 정삼각형 넓이는 ${sum}입니다`
);

const half = Number(prompt("원의 반지름이 몇입니까?"));
const circle = Number(half * half * 3.14);
console.log(
  `${half}반지름의 원의 넓이는${circle}입니다. 둘레는 ${2 * 3.14 * half}`
);

const age = Number(prompt("출생년도가 어떻게 되나요?"));
const age_minus = Number(2024 - age + 1);
console.log(`출생년도 ${age}의 현재 나이는 ${age_minus}입니다`);

const won = Number(prompt("한국돈 얼마를 엔화로 환전하시겠습니까?"));
const currency = Number(0.1075 * won);
console.log(
  `한국돈 ${won}의 현재 엔화환율은 100엔당 930.81원으로 환전시 ${currency}입니다`
);
