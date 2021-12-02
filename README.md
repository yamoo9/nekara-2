###### 네카라쿠배 2기
# Virtual DOM

가상 DOM이 동작하는 원리에 대한 학습

- [x]  가상 DOM 개별 모듈 풀이
- [x]  가상 DOM 노드와 트리
- [x]  이전/이후 가상 DOM 비교
- [x]  가상 DOM 노드를 해석해 실제 DOM에 마운트

<br />

| 모듈 | 설명 |
| --- | --- |
| h.js | 가상(virtual) DOM 노드 생성 |
| createElement.js | DOM 노드 생성 (`children` 포함) |
| diff.js | 이전/이후 가상 DOM 노드 비교 후, 변경 여부 반환 |
| props.js | 가상 DOM 노드의 props 업데이트(변경,추출,검토,제거 등) |
| bindEvents.js | 가상 DOM 노드의 이벤트 props 연결 |
| updateElement.js | 실제 DOM 노드 컨테이너에 마운트(mount) → 렌더링(rendering) |
