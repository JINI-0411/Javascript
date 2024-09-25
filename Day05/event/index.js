// event (마우스관련된거, 인풋, 스크롤하는것들 등등 포함)

const button = document.createElement("button");
button.innerText = "아메리카노";
button.addEventListener("click", () => {
  alert("오늘은 수요일");
});
document.body.appendChild(button);
