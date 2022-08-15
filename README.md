### **📍 프로젝트 소개**

Crew a la mode 웹 페이지를 모바일, 태블릿, 데스크탑 반응형으로 구현한 클론코딩 프로젝트입니다.

### **🚀 프로젝트 목표**

- 다양한 jQuery 라이브러리 사용해보기 (✔️완료)
- 기존 페이지에서 WAI-ARIA 접근성 보완하기 (👣진행중)

### **🔩 사용 기술**

- HTML - 웹 표준을 준수한 시맨틱 마크업 , WAI-ARIA
- CSS - 사용자 지정 변수
- JavaScript

### ❇️ **Advanced Feature**

- 스크롤 이벤트와 window API - ScrollTop 을 이용하여 클래스에 따라 이미지와 텍스트에 애니메이션 효과를 주도록 구현하였습니다.
- 일부 영역에서만 텍스트가 고정되는 효과를 구현하였습니다.

```jsx
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
```

```css
.section_approach_inner_wrap .about_text .text_wrap.is-active {
  position: fixed;
  bottom: 50%;
  transform: translateY(50%);
}
```

- 이미지에 마우스 hover 시 색상 변화와 텍스트가 나타나는 효과와 스크롤을 내릴 때 해당 이미지 영역에서 자동으로 색상 변화와 텍스트가 나타나는 효과를 구현하였습니다.

```jsx
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
```

```css
.section_approach_inner_wrap .list li a.on::after,
.section_approach_inner_wrap .list li a:hover:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(41, 41, 41, 0.3);
}

/* 이미지 hover 시 텍스트가 나타나는 효과 */
.section_approach_inner_wrap .list a.on span,
.section_approach_inner_wrap .list li a:hover span {
  position: absolute;
  display: block;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
  color: var(--main-color-white);
  font-size: 3.5rem;
  font-style: italic;
  z-index: 1;
}
```

### **💬 이슈 & 개선사항**

- Desktop 에서 해상도가 낮아지는 기준으로 미디어쿼리를 작성하였는데 모바일 반응형 분기점을 max-width : 500으로 잡다보니 500px 이하에서는 레이아웃이  현상이 있습니다. 현재 분기점을 다시 잡고 스타일을 수정하는 작업중에 있습니다.
- 스크롤 영역에 따라 애니메이션을 구현하는 부분의 함수와 변수가 조금 복잡한 것 같아 이 후 가독성이 높으면서 간략한 코드로 리팩토링 하려고 합니다.

### 💡 느낀점

- 라이브러리를 한 번도 사용해보지 않은 상태였고, 다양하게 라이브러리를 사용해보고 싶어 시작한 프로젝트였습니다. 초반에는 jQuery 설치부터 버벅거렸는데 이제는 다른 프로젝트에서도 라이브러리를 적용할 수 있을 만큼 익숙해졌습니다.
- 반응형 분기점 잡기가 어려웠습니다. 모든 디바이스에 레이아웃을 완벽하게 충족시킬 수 없지만, 최대한 비슷한 레이아웃을 잡기 위한 노력이 필요함을 느꼈습니다.
