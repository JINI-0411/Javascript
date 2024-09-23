// makeCoffee 함수 만들기 [커피 준비-커피 완료]
// americano, latte, vanilla 함수 만들어서
// makeCoffee(americano) // [커피준비 - 아메리카노 - 커피 완료]
// makeCoffee(latte) // [커피준비 - 아메리카노 - 커피 완료]
// makeCoffee(vanilla) // [커피준비 - 아메리카노 - 커피 완료]

const makeCoffee = (coffee) => {
  console.log("커피 준비");
  coffee();
  console.log("커피 완료");
};

const americano = () => {
  console.log("원두준비");
  console.log("원두갈아서 넣기");
  console.log("머신연결");
  console.log("추출");
  console.log("컵에 담기");
};

const latte = () => {
  console.log("원두준비");
  console.log("원두갈아서 넣기");
  console.log("머신연결");
  console.log("추출");
  console.log("우유준비");
  console.log("우유랑 커피 믹스");
  console.log("컵에 담기");
};

const vanilla = () => {
  console.log("원두준비");
  console.log("원두갈아서 넣기");
  console.log("머신연결");
  console.log("추출");
  console.log("바닐라 시럽준비");
  console.log("우유준비");
  console.log("컵에 시럽이랑 우유붓기");
  console.log("컵에 커피 붓기");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);

// 위에 없는 새로운 메뉴를 넣고 싶을 때 메뉴명있는 곳에 바로 함수 넣기 가능
makeCoffee(() => {
  console.log("원두준비");
  console.log("원두갈아서 넣기");
  console.log("얼음을 컵에 넣기");
  console.log("샷 넣기");
  console.log("물 넣기");
  console.log("망고 넣기");
});
