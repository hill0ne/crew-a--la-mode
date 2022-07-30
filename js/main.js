const aTag = document.querySelectorAll("a");
const textFixed = document.querySelector(".textwrap_fixed");
const header = document.querySelector(".header_wrap");
const list = document.querySelector(".list");

const gnbButton = document.querySelector(".gnb_button");
const nav = document.querySelector(".nav");
const contents = document.querySelector(".section_wrap");

let scroll = 0;
let status = false;

//  a 요소 기본 이벤트 제거
for (a of aTag) {
  a.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

if (document.readyState) {
  window.addEventListener("scroll", () => {
    scroll = document.documentElement.scrollTop;
    fixTextPosition();
    fixHeaderPosition();
    showTextWidthImage();
  });
}

// 스크롤과 결합된 텍스트 애니메이션

function fixTextPosition() {
  if (scroll > 1250) {
    textFixed.firstElementChild.classList.add("is-active");
    if (scroll > 2700) {
      textFixed.firstElementChild.classList.remove("is-active");
    }
  } else {
    textFixed.firstElementChild.classList.remove("is-active");
  }
}

function fixHeaderPosition() {
  if (scroll > 80) {
    header.classList.add("is-active");
  } else {
    header.classList.remove("is-active");
  }
}

function showTextWidthImage() {
  const li = list.children;
  let arr = [];
  let span = [];

  for (let i = 0; i < li.length; i++) {
    let a = li[i].firstElementChild;
    // 배열 a
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

// gnb menu 버튼 동작
gnbButton.addEventListener("click", () => {
  if (!status) {
    nav.classList.add("on");
    status = true;
  } else if (status === true) {
    nav.classList.remove("on");
    status = false;
  }
});

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
