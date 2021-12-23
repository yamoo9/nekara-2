/* eslint-disable no-unused-vars */

import './TiltCardContainer.css';
import { useState, useEffect } from 'react';
import { TiltCard, A11yHidden } from 'components';
import { getTiltCard } from 'api';
import { useA, useCount, useName } from 'hooks';

// 지연된 초기화 함수
const initialization = (initialCount) => {
  let countValueKey = 'euid-count';

  // localStorage.clear();
  let value = localStorage.getItem(countValueKey);

  setTimeout(() => {
    if (!value) {
      localStorage.setItem(countValueKey, JSON.stringify({ count: 1000 }));
    }
  });

  return value ? JSON.parse(value).count : initialCount;
};

const Output = (props) => {
  return (
    <output style={{ margin: 30, display: 'block' }}>{props.children}</output>
  );
};

export function TiltCardContainer(props) {
  // [상태 관리] : 개별 상태 관리 권장

  // 관심사 A ----------------------------------
  const [a, setA] = useA(0);

  // 관심사 Count ------------------------------
  const [count, setCount] = useCount(10);

  // 관심사 Name -------------------------------
  const [name, setName] = useName('이듬');

  // -----------------------------------------

  // [사이드 이펙트 관리]
  useEffect(() => {
    console.log('최초 렌더링 후에 1회 실행');
    // 네트워크 요청 (비동기 통신, 응답)
  }, []);

  // render
  return (
    <>
      <button
        type="button"
        style={{ margin: 30, display: 'block' }}
        onClick={() => setName('yamoo9')}
      >
        update name
      </button>
      <Output>{name}</Output>
      <button
        type="button"
        style={{ margin: 30, display: 'block' }}
        onClick={() => setA(a + 100)}
      >
        update a
      </button>
      <Output>{a}</Output>
      <button
        type="button"
        style={{ margin: 30, display: 'block' }}
        onClick={() => setCount(count + 10)}
      >
        update count
      </button>
      <Output>{count}</Output>
      <div className="tiltCardContainer" lang="en" aria-labelledby="tiltcards">
        <A11yHidden id="tiltcards">카드 목록 레이블</A11yHidden>
        {/* <div className="tiltCardContainer__buttonGroup">
        {cards.map(({ id, text }) => (
          <button
            key={id}
            type="button"
            className="tiltCardContainer__button"
            onClick={() => {}}
          >
            {text} 제거
          </button>
        ))}
      </div> */}
        {/* <ul className="tiltCardContainer__list">
        {cards.map((card, index) => (
          <li key={card.id}>
            <TiltCard
              card={card}
              options={{ 'max-glare': 0.2, 'perspective': 600 }}
            >
              {card.text}
            </TiltCard>
          </li>
        ))}
      </ul> */}
      </div>
    </>
  );
}
