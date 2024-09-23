// General Funtion 일반함수 [구[옛날]문법]

function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

// Arrow Function [신문법]
// () => {}
const add1 = (x, y) => {
  return x + y;
};

const substract1 = (x, y) => {
  return x - y;
};

// ~ 과일 넣으면 ~~ 맛 아이스크림 돌려주는 함수
// 문자 3개 넣으면 배열로 돌려주는 함수
// 숫자를 넣으면 홀수인지 짝수인지 알려주는 함수

const icecream = (fruit) => {
  return `${fruit}맛 아이스크림`;
};

const makeArr = (a, b, c) => {
  return [a, b, c];
};

const oddEven = (num) => {
  return num % 2 == 1 ? "짝수" : "홀수";
};
