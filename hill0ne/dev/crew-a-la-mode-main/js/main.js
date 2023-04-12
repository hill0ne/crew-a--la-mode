const aTag = document.querySelectorAll("a");
const about_text = document.querySelector(".about_text");
const header = document.querySelector(".header_wrap");
const list = document.querySelector(".list");

const gnbButton = document.querySelector(".gnb_button");
const nav = document.querySelector(".nav");
const contents = document.querySelector(".section_wrap");

let scroll = 0;
let status = false;

window.addEventListener("scroll", () => {
  scroll = document.documentElement.scrollTop;
  fixAboutText();
  fixHeaderPosition();
  showTextWidthImage();
});

// about us 영역 텍스트 고정 함수
function fixAboutText() {
  if (scroll > 1250) {
    about_text.firstElementChild.classList.add("is-active");
    if (scroll > 2700) {
      about_text.firstElementChild.classList.remove("is-active");
    }
  } else {
    about_text.firstElementChild.classList.remove("is-active");
  }
}

// 스크롤 시 header 영역 작아지는 함수
function fixHeaderPosition() {
  if (scroll > 80) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }
}

// approach 영역 리스트의 텍스트 애니메이션 함수
// li의 하위요소인 a 요소에 접근하기 위해 for 문 사용
// a 요소를 배열에 넣어 인덱스로 조작
function showTextWidthImage() {
  const li = list.children;
  let arr = [];
  let span = [];

  for (let i = 0; i < li.length; i++) {
    let a = li[i].firstElementChild;
    arr.push(a);
    arr[i].classList.remove("on");
  }

  if (scroll > 1250) {
    arr[0].classList.add("on");
  }
  if (scroll > 1650) {
    arr[0].classList.remove("on");
    arr[1].classList.add("on");
  }
  if (scroll > 2050) {
    arr[1].classList.remove("on");
    arr[2].classList.add("on");
  }
  if (scroll > 2550) {
    arr[2].classList.remove("on");
    arr[3].classList.add("on");
  }
  if (scroll > 2900) {
    arr[3].classList.remove("on");
  }
}

// gnb 버튼 동작
gnbButton.addEventListener("click", () => {
  if (!status) {
    nav.classList.add("on");
    status = true;
  } else if (status === true) {
    nav.classList.remove("on");
    status = false;
  }
});

// gnb 가 아닌 다른 영역 클릭 시 gnb 닫히는 함수
contents.addEventListener("click", () => {
  nav.classList.remove("on");
});

// jquery version

// $(window).on("scroll resize", function () {
//   let scroll = 0;
//   scroll = $(document).scrollTop();
//   fixPosition();
// });

// let fixPosition = () => {
//   if (scroll > 1250) {
//     $(".textwrap-fixed .text_wrap").addClass("on");
//   } else if (scroll > 2700) {
//     $("textwrap-fixed .text_wrap").removeClass("on");
//   } else {
//     $(".textwrap-fixed .text_wrap").removeClass("on");
//   }
// };
