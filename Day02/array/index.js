//기본 타입 : String, Number, Boolean, Null, Undefined
//참조 타입 : Array(배열) : []

//시작은 0번째부터
// const paik = ["아메리카노", "라떼", "모카", "바닐라"];
// console.log(paik);
// console.log(paik[2]);

//서브웨이
//빵메뉴 고르기[플랫,화이트,위트]
//치즈메뉴 고르기[슈레드,모짜렐라,아메리칸치즈]
//소스메뉴 고르기[머스타드,핫칠리,소금,후추,스언,홀레]
//쿠키메뉴 고르기[화이트, 초콜릿, 아몬드]
//음료메뉴 고르기 [콜라,제로콜라,스프라이트,커피]
//최종메뉴는 플랫-모짜렐라-소금-아몬드쿠키-콜라

const bread = ["플랫", "화이트", "위트"];
const cheee = ["슈레드", "모짜렐라", "아메리칸치즈"];
const source = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cook = ["화이트", "초콜릿", "아몬드"];
const dri = ["콜라", "제로콜라", "스프라이트", "커피"];

const bread_menu = Number(
  prompt("플랫0번, 화이트1번, 위트2번 중 원하는 빵번호를 입력하세요")
);

// const choose1 = Number(prompt(`${bread}중 고르세요(0~2)`))

const cheee_menu = Number(
  prompt(
    "슈레드0번, 모짜렐라1번, 아메리칸치즈2번 중 원하는 치즈번호를 입력하세요"
  )
);
const source_menu = Number(
  prompt(
    "머스타드0번, 핫칠리1번, 소금2번, 후추3번, 스언4번, 홀레5번 중 원하는 소스번호를 입력하세요"
  )
);
const cook_menu = Number(
  prompt("화이트0번, 초콜릿1번, 아몬드2번 중 원하는 쿠키번호를 입력하세요")
);
const dri_menu = Number(
  prompt(
    "콜라0번, 제로콜라1번, 스프라이트2번, 커피3번 중 원하는 음료번호를 입력하세요"
  )
);

console.log(
  `최종메뉴는 ${bread[bread_menu]}-${cheee[cheee_menu]}-${source[source_menu]}-${cook[cook_menu]}-${dir[dri_menu]} 입니다`
);
