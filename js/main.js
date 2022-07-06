const textFixed = document.querySelector(".textwrap-fixed");
let scroll = 0;

if (document.readyState) {
  window.addEventListener("scroll", () => {
    scroll = document.documentElement.scrollTop;
    movePosition();
  });
}

function movePosition() {
  console.log(scroll);
  if (scroll > 1250) {
    textFixed.firstElementChild.classList.add("is-active");
    if (scroll > 2700) {
      textFixed.firstElementChild.classList.remove("is-active");
    }
  } else {
    console.log("else");
    textFixed.firstElementChild.classList.remove("is-active");
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
