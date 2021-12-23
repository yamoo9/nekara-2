/* eslint-disable */
import './TiltCardContainer.css';
import { useState } from 'react';
import { TiltCard, A11yHidden } from 'components';
import { getTiltCard } from 'api';

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
  // [상태 관리]
  // const [state, updateState] = useState({
  //   a: 1,
  //   b: 2,
  //   count: 10,
  //   name: 'euid',
  // });

  // 상태 관리 (지연된 초기화(함수) 활용)
  const [count] = useState(initialization.bind(null, 0));

  // [사이드 이펙트 관리]

  return (
    <>
      <button
        type="button"
        style={{ margin: 30, display: 'block' }}
        onClick={() =>
          updateState({
            ...state,
            name: 'yamoo9',
          })
        }
      >
        update name
      </button>
      <Output>{count}</Output>
      {/* <Output>{state.a}</Output>
      <Output>{state.b}</Output>
      <Output>{state.count}</Output>
      <Output>{state.name}</Output> */}
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
