const aTag = document.querySelectorAll("a");
const textFixed = document.querySelector(".textwrap-fixed");
const header = document.querySelector(".header_wrap");
const list = document.querySelector(".list");

const gnbButton = document.querySelector(".gnb-button");
const nav = document.querySelector(".nav");
const contents = document.querySelector(".section_wrap");

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
    showImageText();
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

function showImageText() {
  let li = list.children;
  let a;
  for (item of li) {
    a = item.firstElementChild;
    a.classList.remove("on");
  }
  if (scroll > 1250) {
    // a.classList.remove("on");
    li[0].firstElementChild.classList.add("on");
    if (scroll > 1650) {
      li[0].firstElementChild.classList.remove("on");
      li[1].firstElementChild.classList.add("on");
      if (scroll > 2050) {
        li[1].firstElementChild.classList.remove("on");
        li[2].firstElementChild.classList.add("on");
        if (scroll > 2550) {
          li[2].firstElementChild.classList.remove("on");
          li[3].firstElementChild.classList.add("on");
          if (scroll > 2900) {
            li[3].firstElementChild.classList.remove("on");
            console.log(gnbMenu);
          }
        }
      }
    }
  }
}

// gnb menu

gnbButton.addEventListener("click", () => {
  nav.classList.add("on");
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
