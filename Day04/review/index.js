// 1. [10,20,30,40,50]을 30이하 이면 100 더하기, 아니면 200 더하기
// 2. ["americano", "latte", "vanilla", "mocha", "mint", "tea"]
// ㄴ 5글자이하이면 대문자화, 아니면 '☕' 로 바꾸기

const num = [10, 20, 30, 40, 50];
num.map((x) => {
  return x <= 30 ? x + 100 : x + 200;
});

const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];
coffee.map((x) => {
  return x.length <= 5 ? x.toUpperCase : "☕";
});

//*******************************************************************************/
const add = (x, y) => {
  return x + y;
};
// 이걸 한줄로 변경가능 (return 한줄만 있을때만 가능)

const add1 = (x, y) => x + y; // return지우고 껍데기({}중괄호) 까서 줄일수 있음

//이건 이게 최선임
const mul = (x, y) => {
  const a = "123";
  return x * y;
};

// 맨위에 있는 걸 줄이면 아래처럼 변경가능
// const num1 = [10, 20, 30, 40, 50];
// num.map((x) => (x <= 30 ? x + 100 : x + 200));
