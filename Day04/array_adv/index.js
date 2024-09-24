// arr 함수들
// map : 바꿔줘
// filter : 걸러줘, 어떠한 조건에 부합하는 요소만 남겨줘

[10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
}); // x에 하나씩 대입해서 보면 30>10일경우에는 true이므로 살아남고 이런식으로 해서 걸려지는거

[10, 20, 30, 40, 50].filter((x) => {
  return x == 20 || x == 40;
});

// every : 어떠한 조건에 모든 요소가 부합함? (return Boolean)
[10, 20, 30, 40, 50].every((x) => {
  return x > 10;
}); // false

// some : 어떠한 조건에 하나 요소가 부합함? (return Boolean)
[10, 20, 30, 40, 50].some((x) => {
  return x > 10; //true
});

[10, 20, 30, 40, 50].some((x) => {
  return x > 60; //false
});

// 배열만들때 Array 함수써서 사용가능함
// Array(10)  -> defined로 된 10개 생성됌

// 열칸 만들기[]
Array(100)
  .fill(1)
  .map((x) => {
    return x + 1;
  });

Array(10).fill(10);

// x는 요소 i는 내가 몇번째인지 알려주는 칭구 / 0번째 부터 시작함
Array(100)
  .fill(1)
  .map((x, i) => {
    return i;
  }); // 0부터 99까지 나옴
