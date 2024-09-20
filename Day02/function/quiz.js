// 1. para:x return: hello x님!
// 2. para:x return: ~~핑!
// 3. para:x return: ~~이라니 러키비키잖아😍
// 4. 두 숫자를 주면 제곱을 돌려주는 함수
// 5. 년도, 월, 일을 넣으면 오늘은 ~~년도,  ~월, ~일
// 6. mbti (ei,sn,tf,jp)를 넣으면 외향적/내향적,감각적/직관적,이성적/감성적,계획적/즉흥적
// 7. zodiac 태어난 년도를 넣으면 띠돌려주기

function name(x) {
  return `hello ${x}님!`;
}

function ping(x) {
  return `${x}핑!`;
}

function luck(x) {
  return `${x}이라니 러키비키잖아😍`;
}

function square(x, y) {
  return x ** y;
}

function day(year, month, day) {
  return `오늘은 ${year}년도, ${month}월, ${day}일`;
}

// 6. mbti (ei,sn,tf,jp)를 넣으면 외향적/내향적,감각적/직관적,이성적/감성적,계획적/즉흥적
function mbti(a, b, c, d) {
  const mbtiMap = {
    e: "외향적",
    i: "내향적",
    s: "감각적",
    n: "직관적",
    t: "이성적",
    f: "감성적",
    j: "계획적",
    p: "즉흥적",
  };
  return `${mbtiMap[a]},${mbtiMap[b]},${mbtiMap[c]},${mbtiMap[d]}이시군요!`;
}

// 7. zodiac 태어난 년도를 넣으면 띠돌려주기

function zodiac(year) {
  const target = year % 12;
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return `${animal[target]}띠~`;
}
