/**콘스트 변수(variable)="데이터" */
const lunch = "짜장밥";
alert(lunch); /*여기는 따옴표 떼기*/

const coffee = "무슨티";
console.log(coffee);

const mbti = "entj";
console.log(mbti);

console.log("내 mbti ${mbti}");
console.log(`내 mbti ${mbti}`);
console.log("내 mbti " + mbti);

const name = "박진주";
const ott = "티빙";
const youtube = "말하는동물원 뿌빠TV";
const diner = "미정";

console.log(`
안녕하세요 저의 이름은 ${name} 입니다.
저의 mbti는 ${mbti} 이고, 
제가 좋아하는 ott플랫폼은 ${ott}입니다.
요즘 즐겨보는 유튜버는 ${youtube}입니다.
오늘 저녁은 ${diner}먹을 예정입니다.`);
