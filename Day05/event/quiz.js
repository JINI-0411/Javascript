// 1. 아메리카노 주문 버튼 태그 만들고 누르면 주문완료! 로 바뀌는 버튼 만들기
// 2. 배경색이 하늘색 버튼 태그 만들고 누르면 핑크색으로 바뀌는 버튼 만들기

const button = document.createElement("button");
button.innerText = "아메리카노";
button.addEventListener("click", () => {
  button.innerText = "주문완료";
});
document.body.appendChild(button);

const button1 = document.createElement("button");
// button1.classList.add("button1");
button1.innerText = "카페라떼";
button1.style.backgroundColor = "skyblue";
button1.addEventListener("click", () => {
  button1.style.backgroundColor = "pink";
});
document.body.appendChild(button1);

/// 버튼 다른색 5개 만들고 버튼내용은 색깔 이름 넣어야함
// 버튼 누르면
// 아래에 박스의 색깔이 바뀌어야함

const button2 = document.createElement("button");
button2.innerText = "skyblue";
button2.addEventListener("click", () => {
  button2.style.backgroundColor = "skyblue";
});
document.body.appendChild(button2);

const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.border = "1px solid black";
//**************************************************************************/
["red", "pink", "green", "blue", "orange"].forEach((v) => {
  const button3 = document.createElement("button");
  button3.innerText = v;
  button3.style.backgroundColor = v;
  button3.addEventListener("click", () => {
    box.style.backgroundColor = v;
  });
  document.body.appendChild(button3);
});
document.body.appendChild(box);

//**************************************************************************/

//버튼 두개 추가[네모],[둥글게]

// const circle = border-radius:9999px

// const button4 = document.createElement("button")
// button4.innerText = "동그리"
// button4.addEventListener("click", () => {
//     box.map((x)=>border-radius:9999px)
//   });document.body.appendChild(button4)

[
  { name: "네모", radius: "0px" },
  { name: "둥글게", radius: "9999px" },
].forEach((v) => {
  const button4 = document.createElement("button");
  button4.innerText = v.name;
  button4.addEventListener("click", () => {
    box.style.borderRadius = v.radius;
  });
  document.body.appendChild(button4);
});
document.body.appendChild(box);
