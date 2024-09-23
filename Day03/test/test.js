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
