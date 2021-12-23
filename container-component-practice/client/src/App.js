import React from 'react';
import { TiltCardContainer } from 'containers';
import { useCount, useName } from 'hooks';

export default function App() {
  // return <TiltCardContainer />;

  // 클래스 컴포넌트 안의 로직을 재사용하는 것은 매우 힘겨운 일
  // HOC, render props 패턴 사용 → 래퍼 헬, 컴포넌트 규모 커짐, 클래스 컴포넌트 관심사 분리 어려움
  // React 훅을 사용하는 이유
  // 함수 컴포넌트 상태, 사이드 이펙트 관리 가능
  // 관심사 분리 수월 → 로직 재사용 쉬움
  // 로직 재사용 (함수 활용) → 사용자 정의 훅 함수 → 수 많은 컴포넌트 로직 재사용 하기 쉽다.
  // const [count] = useCount(1000);
  const [name, setName] = useName('이듬');

  return (
    <div>
      <button type="button" onClick={() => setName(name + 'a')}>
        update name
      </button>
      <output>{name}</output>
      <hr />
      <TiltCardContainer />
    </div>
  );
}
