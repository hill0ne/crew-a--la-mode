const aTag = document.querySelectorAll("a");
const textFixed = document.querySelector(".textwrap-fixed");
const header = document.querySelector(".header_wrap");
let scroll = 0;

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
  });
}

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
