###### 네카라쿠배 2기
# 웹 컴포넌트

웹 컴포넌트는 커스텀 컴포넌트를 만들기 위한 표준입니다.  
커스텀 컴포넌트는 사용자 정의 HTML 구조, 캡슐화 된 스타일, 자체 속성 및 메서드 등을 정의할 수 있습니다.

## 컴포넌트의 조건

컴포넌트가 갖춰야 할 조건은 다음과 같습니다.

- 컴포넌트 클래스(ES6 class 문법)
- 컴포넌트 클래스 내부에서만 관리되는 DOM 구조(캡슐화)
- 컴포넌트 클래스에만 적영되는 CSS 스타일(캡슐화)
- 다른 컴포넌트와 인터랙션 하기 위한 이벤트, 클래스, 메서드 등의 API

## 필요한 기술 사양

| 기술 사양 | 설명 |
| --- | --- |
| [Custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements) | 커스텀 HTML 요소를 정의하는데 사용합니다. |
| [Shadow DOM](https://dom.spec.whatwg.org/#shadow-trees) | 컴포넌트 내부에 감춰진 DOM을 생성하는데 사용됩니다. |
| [CSS Scoping](https://drafts.csswg.org/css-scoping/) | 컴포넌트 Shadow DOM 내부에만 적용되는 스타일을 선언하는 데 사용됩니다. |
| [Event retargeting](https://dom.spec.whatwg.org/#retarget) | 컴포넌트 개발 환경에 적합하게 만드는 데 사용됩니다. |

## 커스텀 요소

자체 속성(메서드 포함) 및 이벤트 등을 사용해 클래스에 기술된 커스텀 HTML 요소를 만들 수 있습니다.  
커스텀 요소가 정의(define)되면 다른 HTML 표준 요소(예: `<div>`)와 동일하게 사용할 수 있습니다.

커스텀 요소를 생성하려면 브라우저에 몇가지 세부 정보를 알려야 합니다.  
예를 들어 "요소가 페이지에 추가 또는 제거될 때 처리해야 할 작업" 등을 알려야 합니다.

```js
class EuidInput extends HTMLElement {
  constructor() {
    // 요소가 생성될 때 호출됩니다.
    // HTMLElement를 확장했으므로 반드시 super 호출이 필요합니다.
    super();
  }

  connectedCallback() {
    // 요소가 문서에 추가될 때 브라우저는 이 메소드를 호출합니다.
    // 요소가 반복적으로 추가/제거될 경우 수차례 호출 됩니다.
  }

  disconnectedCallback() {
    // 요소가 문서에서 제거될 때 브라우저는 이 메소드를 호출합니다.
    // 요소가 반복적으로 추가/제거될 경우 수차례 호출 됩니다.
  }

  static get observedAttributes() {
    return [
      /* 변경을 관찰할 속성 이름 배열 */
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // observedAttributes()에 등록된 속성 중 값이 변경되면 호출됩니다.
  }

  adoptedCallback() {
    // 요소가 새 문서로 이동되면 호출됩니다.
    // document.adoptNode에서 발생하며, 거의 사용되지 않습니다.
  }

  // 사용자가 정의한 속성 및 메서드를 작성할 수 있습니다.
  // ...
}
```

브라우저가 인식할 수 있도록 커스텀 요소 이름과 클래스를 정의합니다.

```js
customElements.define('euid-input', EuidInput);
```

HTML 문서에서 커스텀 요소를 사용할 때는 다음과 같이 작성합니다.

```html
<euid-input />
```

JavaScript를 사용해 커스텀 요소를 생성할 수도 있습니다.

```js
const euidInputNode = document.createElement('euid-input');
```