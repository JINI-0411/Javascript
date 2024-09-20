//버스 종류
//마을버스, 시내버스, 고속버스, 심야버스
//1500, 2000, 8000, 10000

//경기권, 충청권, 강원권, 제주권
//+2000, +3000, +3000, +10000

//좌석
// 일반석, 프리미엄석, 넷플석
//+1000, +3000, +4000

// 나이 13세 이하면 20%, 65세 이상이면 50%, 나머지 100% 임

const bus = {
  kind: [
    { name: "마을버스", price: 1500 },
    { name: "시내버스", price: 2000 },
    { name: "고속버스", price: 8000 },
    { name: "심야버스", price: 10000 },
  ],
  region: [
    { name: "경기권", price: 2000 },
    { name: "충청권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
  seat: [
    { name: "일반석", price: 1000 },
    { name: "프리미엄석", price: 3000 },
    { name: "넷플석", price: 4000 },
  ],
};

const busKindChoice = Number(
  prompt(
    `${bus.kind[0].name} ${bus.kind[1].name} ${bus.kind[2].name} ${bus.kind[3].name} 중에 고르셈(0~3)`
  )
);
const busRegionChoice = Number(
  prompt(
    `${bus.region[0].name} ${bus.region[1].name} ${bus.region[2].name} ${bus.region[3].name} 중에 고르셈(0~3)`
  )
);
const busSeatChoice = Number(
  prompt(
    `${bus.seat[0].name} ${bus.seat[1].name} ${bus.seat[2].name} 중에 고르셈(0~2)`
  )
);
const age = Number(prompt("몇 살?"));

const total =
  bus.kind[busKindChoice].price +
  bus.region[busRegionChoice].price +
  bus.seat[busSeatChoice].price;

const msg = `버스종류:${bus.kind[busKindChoice].name}, 버스 행선지:${bus.region[busRegionChoice].name}, 버스 좌석:${bus.seat[busSeatChoice].name}`;

// if (age <= 13) {
//   const total =
//     bus.kind[busKindChoice].price +
//     bus.region[busRegionChoice].price +
//     bus.seat[busSeatChoice].price;
//   console.log(`${msg} 총 금액 : ${total * 0.8} 입니다.`);
// } else if (age >= 65) {
//   const total =
//     bus.kind[busKindChoice].price +
//     bus.region[busRegionChoice].price +
//     bus.seat[busSeatChoice].price;
//   console.log(`${msg} 총 금액 : ${total * 0.5} 입니다.`);
// } else {
//   const total =
//     bus.kind[busKindChoice].price +
//     bus.region[busRegionChoice].price +
//     bus.seat[busSeatChoice].price;
//   console.log(`${msg} 총 금액 : ${total * 1} 입니다.`);
// }

// if (age <= 13) {
//   console.log(`총 금액 : ${total * 0.8}`);
// } else if (age >= 65) {
//   console.log(`총 금액 : ${total * 0.5}`);
// } else {
//   console.log(`총 금액 : ${total * 1}`);
// }
//ㄴ 이렇게도 할수 있꼬

if (age <= 13) {
  console.log(`${msg} 총 금액 : ${total * 0.8}`);
} else if (age >= 65) {
  console.log(`${msg} 총 금액 : ${total * 0.5}`);
} else {
  console.log(`${msg} 총 금액 : ${total * 1}`);
}
