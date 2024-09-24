// 1.[1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
// 2.[1,2,3,4,5,6,7,8,9,10] 4이상 8이하만 살려줘

// const fruitArray = [
//     "watermelon",
//     "cherry",
//     "banana",
//     "avocado",
//     "apple",
//     "orange",
//     "pineapple",
//     "strawberry",
//   ];
// 3. 알파벳 o가 들어있는 애들만 살려줘
// 4. 문자길이가 6글자 이상만 살려줘
// 5. 문자길이가 짝수인 애들만 살리고, 대문자화 시켜줘

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x % 3 == 0;
});

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x >= 4 && x <= 8;
}); // (* and조건)

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

fruitArray.filter((x) => {
  return x.includes("o");
});

fruitArray.filter((x) => {
  return x.length >= 6;
});

fruitArray
  .filter((x) => {
    return x.length % 2 == 0;
  })
  .map((x) => {
    return x.toUpperCase();
  });
// 함수다음에 함수 다시 넣는 걸 메소드 체이닝(method chaining) 이라고 함

// 유저에게 정수 n(maximum) ,k(배수)를 입력 받으면
// n = 10, k =3 -> [3,6,9]
// n = 15, k = 5 -> [5,10,15]
// 를 도출하는 함수 만들기!

// const maximum = Number(prompt("정수입력"));
// const drain = Number(prompt("배수입력"));

// const box = Array(maximum).fill(1).map(X.i)
// const boxPlusnum =

// box.filter((x) => {
//   return x % drain == 0;
// });

// 10, 3 넣는다고 할때
const test = (n, k) => {
  return Array(n)
    .fill(0) // [0,0,0,0,0,0,0,0,0,0]
    .map((x, i) => {
      return i + 1;
    }) // [1,2,3,4,5,6,7,8,9,10]
    .filter((x) => {
      return x % k == 0;
    }); // [3,6,9]
};

const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
const finished = [false, false, true, true];
//결과 ....... > newDoTolist = ["점심먹기","복습하기"]

todolist.filter((x, i) => {
  return !finished[i];
});

const test1 = (todo, finish) => {
  return todolist.filter((x, i) => {
    return !finished[i];
  });
};

// x 기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화 시킨거
// "ox oo xo x xo x" [1,2,1,0,1,0]

// "xabcxdefxghi" [0,3,3,3]

xabcxdefxghi.split("x").map((x) => {
  return x.length;
}); //[0,3,3,3]
//ㄴ 이걸 패턴화시키면 아래처럼

// const test2 = (word) =>{
//   return word.split("x").map((x)=> { return x.length})
// }

const test2 = (word) => word.split("x").map((x) => x.length);

const fruits = ["melon", "kiwi", "apple", "banana", "orange"];

//모음 : a,e,i,o,u 는 대문자로 바꾸기
//[mElOn, kIwI, ApplE, bAnAnA, OrAngE] 가 되어야함

"melon".split("").map((x) => {
  return x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
    ? x.toUpperCase()
    : x;
});

fruits.map((x) =>
  x
    .split("")
    .map((y) =>
      y == "a" || y == "e" || y == "i" || y == "o" || y == "u"
        ? y.toUpperCase()
        : y
    )
);
// [m,e,l,o,n]
const vowels = ["a", "e", "i", "o", "u"];

fruits.map((x) =>
  x.split("").map((y) => (vowels.some((v) => v == y) ? y.toUpperCase() : y))
);

// 1~100까지 만들고, 369 만들기
// [1,2,"👏"...,29,"👏","👏"]
// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서 해보기 / 알고리즘 문제 풀때[String,Array,Number]
// 오브젝트는 해당안됌

const num = Array(100)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((x) => (includes("3") || x.includes("6") || x.includes("9") ? "👏" : x));
