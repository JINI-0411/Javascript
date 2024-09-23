// f(x) = x+1 // 마라,크림->마라떡볶이/크림떡볶이 이런식으로 나오는거 // 떡볶이 한정임
// f(g(x)) : 함수안에 함수 / 함수는 행동으로 생각하기??
//          요리법(마라탕) -> 음식

// callback : 함수안에 함수 넣기

// const cook = (x) => {
//   console.log("요리시작!");
//   x();
//   console.log("요리 끝");
// };

// const maratang = (x) => {
//   console.log("마라탕 만들기!");
// };

// const taco = (x) => {
//   console.log("타코 만들기!");
// };

// const kimbab = (x) => {
//   console.log("김밥 만들기!");
// };

// cook(maratang);
// cook(taco);
// cook(kimbab);

//-----------------------------------------------
const cook = (recipe) => {
  console.log("요리시작");
  recipe();
  console.log("요리 끝");
};

const taco = () => {
  console.log("살사소스 준비");
  console.log("나초칩");
  console.log("난 준비");
  console.log("고기 올리기");
  console.log("타코 완성");
};

const ramen = () => {
  console.log("물 끓이기");
  console.log("면 넣기");
  console.log("스프 넣기");
  console.log("계란 넣기");
};

cook(ramen);

const skill = (magic) => {
  console.log("스킬 사용");
  magic();
  console.log("스킬 완료");
};

const fire = () => {
  console.log("불 마법 사용");
};

const ice = () => {
  console.log("얼음 마법 사용");
};

const tree = () => {
  console.log("나무 마법 사용");
};
