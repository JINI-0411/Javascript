//DOM [HTML+CSS]

// element type
const div = document.createElement("div");
div.innerText = "샤브샤브";
div.style.color = "red";
document.body.appendChild(div);

const button1 = document.createElement("button");
button1.innerText = "아메리카노";
button1.style.backgroundColor = "skyblue";
button1.style.color = "white";
document.body.appendChild(button1);

const button2 = document.createElement("button");
button2.innerText = "에이드";
button2.style.backgroundColor = "skyblue";
button2.style.color = "white";
document.body.appendChild(button2);

const button3 = document.createElement("button");
button3.innerText = "라떼";
button3.style.backgroundColor = "skyblue";
button3.style.color = "white";
document.body.appendChild(button3);

//아래처럼 변경가능
// forEach는 훑어본다는 뜻
["아메리카노", "에이드", "라떼"].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v;
  button.style.backgroundColor = "skyblue";
  button.style.color = "white";
  document.body.appendChild(button);
});

//[아메리카노,노랑색,검은색] [에이드,핑크색,하얀색] [라떼,하늘색,주황색]

// ["아메리카노", "에이드", "라떼"].forEach((v, i) => {
//   const button = document.createElement("button");
//   button.innerText = v;
//   i(0).style.backgroundColor = "yellow";
//   i(0).button.style.color = "black";
//   document.body.appendChild(button);
// });
[
  { name: "아메리카노", bg: "yellow", color: "black" },
  { name: "에이드", bg: "pink", color: "white" },
  { name: "라떼", bg: "skyblue", color: "orange" },
].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v.name;
  button.style.backgroundColor = v.bg;
  button.style.color = v.color;
  document.body.appendChild(button);
});

const container = document.createElement("div");
// className
// container.className = "container" 또는 아래처럼 사용가능

// classList
container.classList.add("container"); // <div class = "container"> </div>
//컨테이너 만들고
const div = document.createElement("div"); // 자식추가
div.classList.add("box"); // 이름없어서 클래스 추가
div.style.backgroundColor = "red"; // 색상추가
container.appendChild(div); // 박스를 컨테이너에다가 추가하는거

const div1 = document.createElement("div");
div1.classList.add("box");
div1.style.backgroundColor = "yellow";
container.appendChild(div1);
// 하나더 만들고
document.body.appendChild(container); // 바디에 컨테이너를 추가하는거

// 2000개 [빨,주,노,초,파,남,보]

// const color = Array(2000)
//   .fill(0)
//   .map((x, i) => String(i + 1)).map((
//   ))
// .add
//   repeat

//   [{name: "빨", bg: "red"},
//     {name: "주", bg: "red"}
//     {name: "노", bg: "red"}
//     {name: "초", bg: "red"}
//     {name: "파", bg: "red"}
//     {name: "남", bg: "red"}
//     {name: "보", bg: "red"}

//   ].forEach(v)=>{
//  container.classList.add("container")
//  const div= document.createElement("div")
//  div.classList.add("box")
//  div.style.backgroundColor = "red"}

const color = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "skyblue",
  "pink",
];

Array(2000)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color[i % color.length];
    container.appendChild(box);
  });

document.body.appendChild(container);

// color.forEach((v) => {
//   const box = document.createElement("div");
//   box.classList.add("box");
//   box.style.backgroundColor = v;
//   container.appendChild(box);
// });
// 이걸 2000번 해야하므로 위와 같이 변경
