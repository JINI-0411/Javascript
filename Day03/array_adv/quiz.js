// 1. [1,2,3,4,5] -> 두배 해주기
// 2. [1,2,3,4,5] -> 홀수면 두배 짝수면 세배
// 3. [1,2,3,4,5] -> 3이하면 '🍒' 아니면 '🍉'

const num = [1, 2, 3, 4, 5].map((x) => {
  return x * 2;
});

// const arr = [1,2,3,4,5] 를 먼저 만들어주고 arr.map을 사용해도 됌

const num1 = [1, 2, 3, 4, 5].map((x) => {
  return x % 2 == 0 ? x * 3 : x * 2;
});

const num2 = [1, 2, 3, 4, 5].map((x) => {
  return x <= 3 ? "🍒" : "🍉";
});

console.log(num);
console.log(num1);
console.log(num2);

const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];

// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
// 3. 단어 안에 있는 알파벳 a를 '🍒'로 바꾸기

const seven = fruitArray.map((x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
});

const upper = fruitArray.map((x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
});

const cherry = fruitArray.map((x) => {
  return x.replaceAll("a", "🍒");
});
// return x.includes("a") ? x.replaceAll("a", "🍒") : x    이렇게도 가능

console.log(seven);
console.log(upper);
console.log(cherry);

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

// 1. 가을 시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿔주셈
// 2. 두유시즌 이벤트 -> 성분에 두유 강제 추가
// 3. 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고, 샷 하나더 늘려주기
// 4. 인플레이션 시즌 이벤트 -> 모든 가격 20% 떡상한 가격으로 변경

const fall = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});

console.log(fall);

const soy = starbucks.map((x) => {
  x.ingredients.push("soymilk"); // push 라는 함수를 사용하기 때문에 그냥 바로 사용 가능 , 배열!
  return x;
});

const aa = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shots = x.shots + 1;
    return x;
  } else {
    return x;
  }
});

const inplation = starbucks.map((x) => {
  x.price = x.price * 1.2;
  return x;
});
