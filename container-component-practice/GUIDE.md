###### 네카라쿠배 2기

<details>
  <summary><strong>Online LIVE 학습 방법 제안</strong></summary>
  <br />
  코로나 상황 악화로 부득이하게 온라인 라이브 강의를 진행하고 있는 현 상황에서<br />    
  강의에 대한 집중력을 높이고, 효율을 극대화 할 수 있는 방안이 없을까 고민하였습니다.<br />  
  진행 가능 여부를 판단하여 제안 사항에 대해 고려해보시길 바랍니다. 😃

  ##### 화면(필수)  
  Google Meet 온라인 라이브 강의는 음소거 모드로 하고 시청

  ##### 토론(선택)   
  Discord 음성 채널을 활용해 수업 내용에 대해 대화하며 수강 (예: 2~4인 1개 조 구성)

  - 재택에서 수강 중이지만, 수업 내용에 대해 토론할 수 있어 집중력을 높일 수 있을 거란 기대
  - 시청 및 토의 중, 이해가 잘 안가는 수업 내용 또는 키워드를 질의 응답

  ##### 학습 주제 및 정리
  학습 내용을 반복적으로 상기 시켜 주제를 각인

  - 새로운 내용 시작 전, 진행 내용 간단 요약
  - 실습 진행 후, 진행 내용 정리
</details>

<br />

## 지난 시간 마지막 질문

useCallback으로 함수를 기억하는데, useMemo는 보통 언제 사용하나요?

<details>
  <summary>답변</summary>

  useMemo 훅은 어떤 값을 기억할 때 사용합니다. (함수를 포함한 모든 값)  
  useCallback 또한 값을 기억할 때 사용하는 점은 비슷하지만 "함수만 기억"합니다.
</details>

## 학습 가이드

- [x]  focusableOrTabbable.js 리마인드
- [x]  PropTypes 검사 도구
- [x]  React Hooks
  - [x]  useState
  - [x]  useEffect
  - [x]  useRef
  - [x]  useCallback
  - [x]  useMemo
- React 고차 컴포넌트
  - [x]  forwardRef
  - [ ]  memo
- [ ]  React 이벤트 핸들링
- [ ]  React 스타일 방법론
- [ ]  React 폼 컨트롤

<br />

### 로직 재사용

#### 클래스 컴포넌트

클래스 컴포넌트 안의 로직을 재사용하려면 HOC, render props 패턴을 사용해야 합니다. 
하지만 이 방법은 래퍼 헬 또는 규모가 비대한 컴포넌트 문제점을 가져옵니다. 뿐만 아니라 
클래스 컴포넌트의 경우 관심사의 분리(상태, 이펙트 등)가 어렵습니다.

#### 함수 컴포넌트 + React 훅

함수 컴포넌트에서는 React 훅을 사용해 상태, 사이드 이펙트를 관리할 수 있습니다.
게다가 상태와 이펙트를 묶어 관심사 또한 손쉽게 분리하여 관리할 수 있어 로직 재사용이 쉽습니다.
로직 재사용을 위해 커스텀 훅 함수를 작성하면 수 많은 컴포넌트에서 재사용 할 수 있습니다.

<br />

## SkHeading 컴포넌트

- [x]  헤딩 레벨 접근성 (영상 시청 여부 확인)
- [x]  CSS 모듈
- [x]  propTypes 검사 (매뉴얼 → PropTypes 패키지 설치/활용)

<br />

## Dialog 컴포넌트

- [x]  키보드 트랩(trap) ← 유틸리티 활용
- [x]  오프너(openner) 버튼 초점 이동
- [x]  컴파운드(compound) 컴포넌트 ( = 이름이 있는 콘텐츠 슬롯 (named slot))
- [x]  콘텐츠 슬롯(slot) → props.children 활용
- [x]  React Hooks 활용
- [x]  PropTypes 활용
- [x]  CSS 모듈

<br />

## SkSpinner 컴포넌트

- [x]  로딩 접근성 (영상 시청)
- [x]  Portal의 필요성 재고
- [ ]  React Hooks 활용
- [ ]  PropTypes 활용
- [ ]  CSS 모듈

<br />

## SkSection 컴포넌트

- [ ]  React Hooks 활용
- [ ]  PropTypes 활용
- [ ]  CSS 모듈
- [ ]  상태 관리
- [ ]  네트워크 통신 (비동기 요청)

<br />

## SkCard 컴포넌트

- [ ]  React Hooks 활용
- [ ]  PropTypes 활용
- [ ]  CSS 모듈
- [ ]  데이터 바인딩

