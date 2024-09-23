// 배열 요소 바꾸기 함수

const addTen = (x) => {
  return x + 10;
};

const square = (x) => {
  return x ** x;
}; // 제곱

const num = [1, 2, 3, 4, 5].map(addTen);
const num1 = [1, 2, 3, 4, 5].map(square);
const num2 = [1, 2, 3, 4, 5].map((x) => {
  return x + 100;
});

// 함수를 바로 넣을수도 있다고 했으니까 num2 처럼 바로 넣어서 값을 확인할 수도 있음

console.log(num);
console.log(num1);
console.log(num2);
