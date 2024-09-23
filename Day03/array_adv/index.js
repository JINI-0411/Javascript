// String, Number, Boolean, Array(배열화)

const arr = ["Samsung", "LG", "Apple", "Google"];

arr.push("Hyundai"); // 현대 뒤에 추가
arr.unshift("Hybe"); // 하이브 앞에 추가
arr.pop(); // 맨뒤에 요소 빼기
arr.shift(); // 맨앞에 요소 빼기
arr.reverse(); // 배열 거꾸로["Google","Apple","LG","Samsung"]
arr.indexOf("LG"); // 있으면 1
arr.indexOf("toyota"); // 없으면 -1
arr.includes("Google"); // true , false 로 나옴 // 이거는 구글이 있으니 트루

//퀴즈
// 유저에게 뉴스기사를 입력받고, 찾고 싶은 단어를 입력받은 후
// 단어가 있으면 단어가 있습니다! 없으면 단어가 없습니다.

//********************************************************************/
// const news = prompt("뉴스기사 입력");
// const newsSplit = news.split(" ");
// const newsFind = prompt("찾고 싶은 단어 입력");

// const ffff = arr.indexOf(`${newsFind}`);   //  여기서 오류발생함

// if (ffff == 1) {
//   alert("단어있음");
// } else {
//   alert("단어없음");
// }

//********************************************************************/

const news1 = prompt("뉴스기사 입력");
const lookingWord = prompt("찾고 싶은 단어 입력");
const words = news1.split(" ");
const msg = words.includes(lookingWord) ? "단어가 있음" : "단어가 없음";
alert(msg);
