// CGV 프로그램
// 1. 영화 고르기 - ["베테랑2", "에일리언", "사랑의하츄핑"]
// 2. 좌석 등급 고르기 - standard[10000], couple[20000], premium[15000], economy[8000]
// 3. 팝콘 고르기 - 일반[6000], 캬라멜[6500], 치즈[6500], 반반[7000]
// 4. 음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
// 5. 나이 입력 - 13세 이하면 30%할인, 60세 이상 20%할인 [영화만할인적용]

// 콘솔- 영화, 좌석, 팝콘, 음료 총 금액:~~~입니다.
//------------------------------------------------------------------------------------
// const movie = ["베테랑2", "에일리언", "사랑의하츄핑"];
// const chair = [standard, couple, premium, economy];
// const pop = [일반, 캬라멜, 치즈, 반반];
// const drink = [탄산, 에이드, 커피];
// const age = Number(prompt("나이를 입력하세요"));

// const movie_choice = prompt(`${movie}중 관람하실 영화를 고르세요`);
// const chair_choice = prompt(`${chair}중 좌석등급을 0~3으로 고르세요`);
// const pop_choice = prompt(`${pop}중 원하는 팝콘 종류를 0~3으로 고르세요`);
// const drink_choice = prompt(`${drink}중 원하는 음료를 0~2로 고르세요`);

// if (chair_choice == 0) {
//   console.log(10000);
// } else if (chair_choice == 1) {
//   console.log(20000);
// } else if (chair_choice == 2) {
//   console.log(15000);
// } else {
//   console.log(8000);
// }

// if (pop_choice == 0) {
//   console.log(6000);
// } else if (chair_choice == 1) {
//   console.log(6500);
// } else if (chair_choice == 2) {
//   console.log(6500);
// } else {
//   console.log(7000);
// }

// if (drink_choice == 0) {
//   console.log(2000);
// } else if (chair_choice == 1) {
//   console.log(3000);
// } else {
//   console.log(3000);
// }
//------------------------------------------------------------
// const movie = {
//   name: ["베테랑2", "에일리언", "사랑의 하츄핑"],
//   seat: {
//     name: ["Standard", "Couple", "Premium", "Economy"],
//     price: [10000, 20000, 15000, 8000],
//   },
// };

const movie = {
  name: ["베테랑2", "에일리언", "사랑의 하츄핑"],
  seat: [
    { name: "Standard", price: 10000 },
    { name: "Couple", price: 20000 },
    { name: "Premium", price: 15000 },
    { name: "Economy", price: 8000 },
  ],
};
//--------------------------
// const shop = {
//   popcorn: {
//     name: [],
//     price: [],
//   },
// };
//-----------------------------
const shop = {
  popcorn: [
    { name: "일반 팝콘", price: 6000 },
    { name: "캬라멜 팝콘", price: 6500 },
    { name: "치즈 팝콘", price: 6500 },
    { name: "반반 팝콘", price: 7000 },
  ],
  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

const movieChoice = Number(prompt(`${movie.name} 중 영화를 고르세요(0~2)`));
const seatChoice = Number(
  prompt(
    `${movie.seat[0].name} ${movie.seat[1].name} ${movie.seat[2].name} ${movie.seat[3].name} 중에 고르세요(0~3)`
  )
);
const popcornChoice = Number(
  prompt(
    `${shop.popcorn[0].name} ${shop.popcorn[1].name} ${shop.popcorn[2].name} ${shop.popcorn[3].name} 중에 고르세요(0~3)`
  )
);
const beverageChoice = Number(
  prompt(
    `${shop.beverage[0].name} ${shop.beverage[1].name} ${shop.beverage[2].name} 중에 고르세요(0~3)`
  )
);
const age = Number(prompt("몇 살?"));
const total =
  movie.seat[seatChoice].price +
  shop.popcorn[popcornChoice].price +
  shop.beverage[beverageChoice].price;

const msg = `${movie.name[movieChoice]},${movie.seat[seatChoice].name},${shop.popcorn[popcornChoice].name},${shop.beverage[beverageChoice].name}`;

// const movie = {
//     name: ["베테랑2", "에일리언", "사랑의 하츄핑"],
//     seat: [
//       { name: "Standard", price: 10000 },
//       { name: "Couple", price: 20000 },
//       { name: "Premium", price: 15000 },
//       { name: "Economy", price: 8000 },
//     ],
//   };

//lexical scope 검색해보기 / 바운더리 안은 다른 영역이라고 생각
if (age <= 13) {
  const total1 =
    movie.seat[seatChoice].price * 0.7 +
    shop.popcorn[popcornChoice].price +
    shop.beverage[beverageChoice].price;
  console.log(`${msg} 총 금액 : ${total1} 입니다.`);
} else if (age >= 60) {
  const total2 =
    movie.seat[seatChoice].price * 0.8 +
    shop.popcorn[popcornChoice].price +
    shop.beverage[beverageChoice].price;
  console.log(`${msg} 총 금액 : ${total2} 입니다.`);
} else {
  const total3 =
    movie.seat[seatChoice].price * 1 +
    shop.popcorn[popcornChoice].price +
    shop.beverage[beverageChoice].price;
  console.log(`${msg} 총 금액 : ${total3} 입니다.`);
}
